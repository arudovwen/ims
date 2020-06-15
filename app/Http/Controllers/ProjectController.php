<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function create(Request $request){
   
        return Project::create([
            'name'=>$request->name,
            'about' => $request->about,
            'cover_image' =>$request->cover_image
        ]);
    }
   public function updateProject(Request $request, $id){
        $data = Project::where('id',$id)->first();
        $data->name = $request->name;
        $data->about = $request->about;
        $data->cover_image = $request->cover_image;
        $data->save();
   }
    public function getProjects(){
        return Project::all();
    }

    public function getProject($id){
        return Project::where('id',$id)->first();
    }

    public function deleteProject($id){
        Project::find($id)->delete();
    }
}
