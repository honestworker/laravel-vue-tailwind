<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController as BaseController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Validator;

class AuthController extends BaseController
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:4',
            'email' => 'required|unique:users|email',
            'password' => 'required|min:8',
            'confirm_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['user'] = [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'role' => 'admin',
            'token' => $user->createToken(env('APP_NAME', 'Laravel'))-> accessToken,
        ];

        return $this->sendResponse($success, 'User register successfully.');
    }

    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if ($user) {
            if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
                $user = Auth::user();
                $success['user'] = [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'role' => 'admin',
                    'token' => $user->createToken(env('APP_NAME', 'Laravel'))->accessToken,
                ];
    
                return $this->sendResponse($success, 'User login successfully.');
            } else {
                return $this->sendError('Unauthenticated.', ['password' => 'Invalid credential']);
            }
        } else {
            return $this->sendError('Unregistered.', ['email' => 'Could not find the user']);
        }
    }

    /**
     * Get User api
     *
     * @return \Illuminate\Http\Response
     */
    public function user()
    {
        if (Auth::check()) {
            $user = Auth::user();
            $success['user'] = [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => 'admin',
            ];

            return $this->sendResponse($success, 'User get successfully.');
        } else {
            return $this->sendError('Unauthenticated.', ['auth' => 'Unauthenticated']);
        }
    }

    /**
     * Logout api
     *
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        if (Auth::check()) {
            Auth::user()->token()->revoke();
            return $this->sendResponse(null, 'User logout successfully.');
        } else {
            return $this->sendError('Unauthenticated.', ['auth' => 'Unauthenticated']);
        }
    }
}