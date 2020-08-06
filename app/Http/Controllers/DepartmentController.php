<?php

namespace App\Http\Controllers;

use App\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Department::all();
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
        $ddd = array([
            'name'=> 'EXAMINATIONS DEVELOPMENT CENTRE (EDC)',
            'email'=> 'l.okereke@ministryofeducation.im.gov.ng',
            'address'=>'Examinations Development Centre (EDC), Ministry of Education, Imo State Secretariat, Port Harcourt Road, Owerri.',
            'phone'=> '-',
            'head'=> 'OKEREKE, LIVINUS I.C.',
            'designation'=> 'Acting Director (Exams)',
        ],
        [
            'name'=> 'Adult/Non Formal Education (ANFE)',
            'email'=> '-',
            'address'=> '-',
            'phone'=> '-',
            'head'=> '-',
            'designation'=> '-',
        ],
        [
            'name'=>'TERTIARY/SCHOLARSHIP',
            'email'=> 'e.uchegbu@ministryofeducation.im.gov.ng',
            'address'=> 'Tertiary/Scholarship Department, Ministry of Education, Imo State Secretariat, Port Harcourt Road, Owerri',
            'phone'=> '-',
            'head'=> 'UCHEGBU, EMMANUEL CHIGBO',
            'designation'=> 'Deputy Director, Tertiary/Scholarship Department',
        ],
        [
            'name'=> 'QUALITY ASSURANCE DEPARTMENT',
            'email'=> 'p.nlebedum@ministryofeducation.im.gov.ng',
            'address'=> 'Quality Assurance Department, Ministry of Education, Imo State Secretariat, Port Harcourt Road, Owerri',
            'phone'=> '-',
            'head'=> 'Dr. (Mrs) Nlebedum, P.N.',
            'designation'=> 'Director, Quality Assurance Department',
        ],
        [
            'name'=> 'SCIENCE, TECHNICAL AND TERTIARY EDUCATION',
            'email'=> 'p.eleberi@ministryofeducation.im.gov.ng',
            'address'=> 'Science, Technical and Tertiary Education,Ministry of Education, Imo State Secretariat, Port Harcourt Road, Owerri.',
            'phone'=> '-',
            'head'=> 'Eleberi Patricia A. (Mrs)',
            'designation'=> 'Director, Science, Technical and Tertiary Education',
        ],
        [
            'name'=> 'EDUCATION SUPPORT SERVICES DEPARTMENT (ESSD)',
            'email'=> ' s.nwagwu@ministryofeducation.im.gov.ng',
            'address'=> 'Education Support Services Department (ESSD), Ministry of Education, Imo State Secretariat, Port Harcourt Road, Owerri',
            'phone'=> '08033417775',
            'head'=> 'Nwagwu, Stella Nnenna',
            'designation'=> 'Director, Education Support Services Department (ESSD)',
        ],
        [
            'name'=> 'DEPARTMENT OF PLANNING RESEARCH AND STATISTICS',
            'email'=> 'n.okwara@ministryofeducation.im.gov.ng',
            'address'=> 'Department of Planning Research and Statistics, Ministry of Education, Imo State Secretariat, Port Harcourt Road, Owerri',
            'phone'=> '08037891607',
            'head'=>'Okwara Catherine Ngozi (Mrs.)',
            'designation'=> 'Ag. Director, Planning Research and Statistics',
        ],
        [
            'name'=> 'ADMINISTRATION AND FINANCES',
            'email'=> 'a.johnnjoku@ministryofeducation.im.gov.ng',
            'address'=> 'Dept. of Administration, Ministry of Education, Imo State Secretariat, Port Harcourt Road, Owerri.',
            'phone'=> '+234 803 763 2048',
            'head'=> 'Angela Ogechi John-Njoku (Mrs.)',
            'designation'=> 'Director of Administration and Finance (GL 16)',
        ],
        [
            'name'=> 'SECONDARY EDUCATION MANAGEMENT BOARD (SEMB)',
            'email'=> 'o.anyikude@ministryofeducation.im.gov.ng',
            'address'=> 'SEMB, Ministry of Education, Imo State Secretariat, Port Harcourt Road, Owerri',
            'phone'=> '-',
            'head'=> ' Oby Anyikude (Mrs.)',
            'designation'=> 'Executive Secretary (ES)',
        ],
        [
            'name'=> 'IMO STATE EDUCATION BASIC BOARD (IMSUBEB)',
            'email'=> 'o.anyikude@ministryofeducation.im.gov.ng',
            'address'=> 'SEMB, Ministry of Education, Imo State Secretariat, Port Harcourt Road, Owerri',
            'phone'=> '-',
            'head'=> ' Oby Anyikude (Mrs.)',
            'designation'=> 'Executive Secretary (ES)',
        ]);
   
         foreach ($ddd as $d ) {
            
            Department::create([
                'name'=> $d['name'],
                'email'=> $d['email'],
                'address'=> $d['address'],
                'phone'=> $d['phone'],
                'head'=> $d['head'],
                'designation'=> $d['designation'],
    
            ]);
         }
       
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {
        return Department::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function edit(Department $department)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Department $department)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function destroy(Department $department)
    {
        //
    }
}
