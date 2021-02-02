<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();

            $table->integer('provider_id');
            $table->string('title');
            $table->text('summary')->nullable();
            $table->text('entry_requirements')->nullable();
            $table->text('required_equipment')->nullable();
            $table->text('assessment')->nullable();
            $table->string('qualification_type')->nullable();
            $table->string('qualification_name')->nullable();
            $table->string('qualification_level')->nullable();
            $table->string('awarding_body')->nullable();
            $table->boolean('is_online')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses');
    }
}
