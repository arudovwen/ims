<?php

namespace App\Http\Controllers;

use App\Program;
use Illuminate\Http\Request;

class ProgramsController extends Controller
{
    public function create(Request $request){
   
        return Program::create([
            'name'=>$request->name,
            'about' => $request->about,
            'cover_image' =>$request->cover_image
        ]);
    }
   public function updateProgram(Request $request, $id){
        $data = Program::where('id',$id)->first();
        $data->name = $request->name;
        $data->about = $request->about;
        $data->cover_image = $request->cover_image;
        $data->save();
   }
    public function getPrograms(){
        return Program::all();
    }

    public function getProgram($id){
        return Program::where('id',$id)->first();
    }

    public function deleteProgram($id){
        Program::find($id)->delete();
    }
}
