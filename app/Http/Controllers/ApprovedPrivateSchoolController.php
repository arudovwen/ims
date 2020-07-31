<?php

namespace App\Http\Controllers;

use App\ApprovedPrivateSchool;
use Illuminate\Http\Request;

class ApprovedPrivateSchoolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ApprovedPrivateSchool::paginate(15);
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
      return  ApprovedPrivateSchool::create([
        'name_of_proprietor'=> $request->name_of_proprietor,
        'location' => $request->location,
        'year_of_approval' => $request->year_of_approval,
        'phone_no' => $request->phone_no,
        'lga'=>$request->lga
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ApprovedPrivateSchool  $approvedPrivateSchool
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {
        return ApprovedPrivateSchool::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ApprovedPrivateSchool  $approvedPrivateSchool
     * @return \Illuminate\Http\Response
     */
    public function edit(ApprovedPrivateSchool $approvedPrivateSchool)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ApprovedPrivateSchool  $approvedPrivateSchool
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ApprovedPrivateSchool $approvedPrivateSchool)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ApprovedPrivateSchool  $approvedPrivateSchool
     * @return \Illuminate\Http\Response
     */
    public function destroy(ApprovedPrivateSchool $approvedPrivateSchool)
    {
        //
    }
}
