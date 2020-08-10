<?php

namespace App\Http\Controllers;

use App\ApplicationGroup;
use Illuminate\Http\Request;

class ApplicationGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ApplicationGroup::all();
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
      
        return ApplicationGroup::create([
            'title'=>$request->title,
            'purpose'=>$request->purpose,
            'description'=>$request->description,
            'phases'=>$request->phase,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ApplicationGroup  $applicationGroup
     * @return \Illuminate\Http\Response
     */
    public function show(ApplicationGroup $applicationGroup)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ApplicationGroup  $applicationGroup
     * @return \Illuminate\Http\Response
     */
    public function edit(ApplicationGroup $applicationGroup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ApplicationGroup  $applicationGroup
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ApplicationGroup $applicationGroup)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ApplicationGroup  $applicationGroup
     * @return \Illuminate\Http\Response
     */
    public function destroy(ApplicationGroup $applicationGroup)
    {
        //
    }
}
