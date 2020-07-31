<?php

namespace App\Http\Controllers;

use App\WaecCandidate;
use Illuminate\Http\Request;

class WaecCandidateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return WaecCandidate::paginate(15);
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
        return  WaecCandidate::create([
            'sect' => $request->sect,
            'present_posting' => $request->present_posting,
            'phone_no' => $request->phone_no,
            'lga'=>$request->lga,
            'remarks'=>$request->remarks,
            'zone'=>$request->zone,
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\WaecCandidate  $waecCandidate
     * @return \Illuminate\Http\Response
     */
    public function show(WaecCandidate $waecCandidate)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\WaecCandidate  $waecCandidate
     * @return \Illuminate\Http\Response
     */
    public function edit(WaecCandidate $waecCandidate)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\WaecCandidate  $waecCandidate
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, WaecCandidate $waecCandidate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\WaecCandidate  $waecCandidate
     * @return \Illuminate\Http\Response
     */
    public function destroy(WaecCandidate $waecCandidate)
    {
        //
    }
}
