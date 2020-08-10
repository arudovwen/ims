<?php

namespace App\Http\Controllers;

use App\FormTemplate;
use Illuminate\Http\Request;

class FormTemplateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return FormTemplate::all();
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
        return FormTemplate::create([
            'title'=>$request->title,
            'group'=>$request->group,
            'phase'=>$request->phase,
            'options' => json_encode($request->options),
            'template'=> json_encode($request->template)
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\FormTemplate  $formTemplate
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {
        return FormTemplate::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\FormTemplate  $formTemplate
     * @return \Illuminate\Http\Response
     */
    public function edit(FormTemplate $formTemplate)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\FormTemplate  $formTemplate
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FormTemplate $formTemplate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\FormTemplate  $formTemplate
     * @return \Illuminate\Http\Response
     */
    public function destroy(FormTemplate $formTemplate)
    {
        //
    }
}
