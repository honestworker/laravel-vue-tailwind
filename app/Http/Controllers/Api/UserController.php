<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController as BaseController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Validator;
use JamesDordoy\LaravelVueDatatable\Http\Resources\DataTableCollectionResource;

class UserController extends BaseController
{
    /**
     * Index api
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $length = $request->input('length');
        $sortBy = $request->input('column');
        $orderBy = $request->input('dir');
        $searchValue = $request->input('search');
        
        $query = User::where('id', '>', 0);
        if ($searchValue) {
            $query = $query->where(function($query) use ($searchValue) {
                $query->where('name', 'LIKE', '%' . $searchValue . '%');
                $query->orWhere('email', 'LIKE', '%' . $searchValue . '%');                    
            });
        }
        if ($sortBy) {
            $query = $query->orderBy($sortBy, $orderBy ? $orderBy : 'asc');
        }

        $data = $query->paginate($length);
        
        return new DataTableCollectionResource($data);
    }
}