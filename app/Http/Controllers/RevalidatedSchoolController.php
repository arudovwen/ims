<?php

namespace App\Http\Controllers;

use App\RevalidatedSchool;
use Illuminate\Http\Request;

class RevalidatedSchoolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return RevalidatedSchool::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

       
        return RevalidatedSchool::create([
            'school'=>$request->school,
            'category'=>$request->category,
            'details'=> \json_encode($request->detail),
            'status'=>'pending'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\RevalidatedSchool  $revalidatedSchool
     * @return \Illuminate\Http\Response
     */
    public function show(RevalidatedSchool $revalidatedSchool)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\RevalidatedSchool  $revalidatedSchool
     * @return \Illuminate\Http\Response
     */
    public function edit(RevalidatedSchool $revalidatedSchool)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\RevalidatedSchool  $revalidatedSchool
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Order::create([
            'name'=> $request->name,
            'price'=>$request->price,
            'ref'=>$request->price,
            'type'=>$request->type,
            'status'=>$request->status,
        ]);


    $data = RevalidatedSchool::find($id);
    $data->status ='paid';
    $data->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\RevalidatedSchool  $revalidatedSchool
     * @return \Illuminate\Http\Response
     */
    public function destroy(RevalidatedSchool $revalidatedSchool)
    {
        //
    }
}
