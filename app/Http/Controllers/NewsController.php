<?php

namespace App\Http\Controllers;

use App\NewModel;
use App\NewsDraft;
use App\Announcement;
use App\NewsCategory;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index(){
        return NewModel::where('featured',0)->latest()->get();
    }
    public function createNews(Request $request){

    
        return NewModel::create([
            'subject' =>$request->subject,
            'author' => $request->author,
            'content' => $request->content,
            'featured' => $request->featured,
            'cover_image' => $request->coverImage,
            'category' => $request->category,
            'status' => 'inactive'
        ]);
    }
    public function draftNews(Request $request){

    
        return NewsDraft::create([
            'subject' =>$request->subject,
            'author' => $request->author,
            'content' => $request->content,
            'featured' => $request->featured,
            'cover_image' => $request->coverImage,
            'category' => $request->category,
            'status' => 'draft'
        ]);
    }
    public function getDrafts(){
        return NewsDraft::all();
    }
    public function getDraft($id){
        return NewsDraft::where('id',$id)->first();
    }
    public function imageUpload(Request $request)
    {
        $file = $request->file('file');


        $path = secure_url('images/') . '/' . $file->getClientOriginalName();
        $imgpath = $file->move(public_path('images/'), $file->getClientOriginalName());
        $fileNameToStore = $path;

        return json_encode(['location' => $fileNameToStore]);
    }

    public function createAnnouncement(Request $request){
        return Announcement::create([
            'subject' =>$request->subject,
            'content' => $request->content,
            'cover_image' => $request->coverImage,
            'status' => 'inactive'
            ]);
    }
    public function getCategories(){
        return NewsCategory::all();
    }
    public function getNews(){
        return NewModel::where('status','active')->latest()->paginate(15);
    }
    public function getAnnouncements(){
        return Announcement::all();
    }

    public function getNew($id){
        return NewModel::where('id',$id)->first();
    }

    public function getFeaturedNews(){
        return NewModel::where('featured',1)->latest()->get();
    }
    public function getNormalNews(){
        return NewModel::where('featured',0)->latest()->paginate(15);
    }
    public function getAnnouncement( $id){
        return Announcement::where('id',$id)->first();
    }
    public function getLatestAnnouncements( ){
        return Announcement::latest()->first();
    }
    public function current(){
        return Announcement::where('status','active')->latest()->get();
    }

    public function updateNews(Request $request, $id){
        $data = NewModel::where('id',$id)->first();
        $data->subject =$request->subject;
        $data->author =$request->author;
        $data->content =$request->content;
        $data->featured =$request->featured;
        $data->cover_image =$request->cover_image;
        $data->category = $request->category;
        $data->status =  'inactive';
        $data->save();
    }
    public function updateAnnouncement($id){
        $data = Announcement::where('id',$id)->first();
        $data->subject = $request->subject;
        $data->content =json_encode($request->content);
        $data->cover_image =$request->cover_image;
        $data->status =  'inactive';
        $data->save();
    }
    public function deleteNews($id){
        NewModel::find($id)->delete();
    }
    public function deleteAnnouncement($id){
        Announcement::find($id)->delete();
    }
    public function verify($id){
        $data = NewModel::where('id',$id)->first();
        $data->status =  'active';
        $data->save();
    }
    public function unverify($id){
        $data = NewModel::where('id',$id)->first();
        $data->status =  'inactive';
        $data->save();
    }
    public function verifyA($id){
        $data = Announcement::where('id',$id)->first();
        $data->status =  'active';
        $data->save();
    }
    public function unverifyA($id){
        $data = Announcement::where('id',$id)->first();
        $data->status =  'inactive';
        $data->save();
    }

}
