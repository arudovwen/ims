<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
if (App::environment('production')) {
    URL::forceScheme('https');
}

Route::middleware('auth:admin')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', 'Auth\RegisterController@reg');

Route::post('create', 'DirectoryController@create');
Route::put('update/{id}', 'DirectoryController@update');
Route::get('get-schools', 'DirectoryController@getSchools');
Route::get('get-school/{id}', 'DirectoryController@getSchool');
Route::delete('delete-school', 'DirectoryController@singleDelete');
Route::post('mass-delete', 'DirectoryController@massDelete');


Route::post('create-lga', 'LgaController@create');
Route::put('update-lga/{id}', 'LgaController@update');
Route::get('show-lgas', 'LgaController@show');
Route::get('edit-lga/{id}', 'LgaController@edit');
Route::delete('delete-lga', 'DirectoryController@delete');

Route::post('create-news', 'NewsController@createNews');
Route::post('create-announcement', 'NewsController@createAnnouncement');


Route::put('update-news/{id}', 'NewsController@updateNews');
Route::put('update-announcement/{id}', 'NewsController@updateAnnouncement');

Route::put('verify/{id}', 'NewsController@verify');
Route::put('unverify/{id}', 'NewsController@unverify');

Route::put('verify-a/{id}', 'NewsController@verifyA');
Route::put('unverify-a/{id}', 'NewsController@unverifyA');


Route::get('news-categories', 'NewsController@getCategories');

Route::post('image-upload', 'NewsController@imageUpload');

Route::get('get-news', 'NewsController@getNews');
Route::get('all-news', 'NewsController@index');
Route::get('get-featured-news', 'NewsController@getFeaturedNews');
Route::get('get-normal-news', 'NewsController@getNormalNews');
Route::get('get-new/{id}', 'NewsController@getNew');

Route::get('get-announcements', 'NewsController@getAnnouncements');
Route::get('get-latest-announcement', 'NewsController@getLatestAnnouncements');
Route::get('get-announcement/{id}', 'NewsController@getAnnouncement');

Route::get('current-a', 'NewsController@current');
Route::delete('delete-news/{id}', 'NewsController@deleteNews');
Route::delete('delete-announcement/{id}', 'NewsController@deleteAnnouncement');


Route::post('save-draft', 'NewsController@draftNews');
Route::get('get-drafts', 'NewsController@getDrafts');
Route::get('get-draft/{id}', 'NewsController@getDraft');

Route::post('create-project', 'ProjectController@create');
Route::get('get-projects', 'ProjectController@getProjects');
Route::put('update-project/{id}', 'ProjectController@updateProject');
Route::get('get-project/{id}', 'ProjectController@getProject');
Route::delete('delete-project/{id}', 'ProjectController@deleteProject');

Route::post('create-program', 'ProgramsController@create');
Route::get('get-programs', 'ProgramsController@getPrograms');
Route::put('update-program/{id}', 'ProgramsController@updateProgram');
Route::get('get-program/{id}', 'ProgramsController@getProgram');
Route::delete('delete-program/{id}', 'ProgramsController@deleteProgram');


Route::middleware('auth:admin')->group(function () {
    Route::resource('admin', 'AdminController');
    Route::post('multi-delete', 'AdminController@multiDelete');
    Route::resource('staff', 'StaffController');
    Route::get('all-staff', 'StaffController@allStaffs');
    Route::post('multi-staff-delete', 'StaffController@multiDelete');
});

Route::resource('approved-private-school', 'ApprovedPrivateSchoolController');
Route::get('all-approved-private-school', 'ApprovedPrivateSchoolController@all');
Route::resource('principal-phone', 'PrincipalPhoneController');
Route::get('all-principal-phone', 'PrincipalPhoneController@all');
Route::resource('principal-transfer', 'PrincipalTransferController');
Route::get('all-principal-transfer', 'PrincipalTransferController@all');

Route::resource('principal-appointment', 'PrincipalAppointmentController');
Route::get('all-principal-appointment', 'PrincipalAppointmentController@all');

Route::resource('waec-candidate', 'WaecCandidateController');

Route::get('all-waec-candidate', 'WaecCandidateController@all');
Route::resource('wassce-private-school', 'WasscePrivateSchoolController');
Route::get('all-wassce-private-school', 'WasscePrivateSchoolController@all');

Route::get('all-totals', 'DirectoryController@totals');


Route::resource('appointment', 'AppointmentController');
Route::post('check-time', 'AppointmentController@checkTime');
Route::post('contact', 'AppointmentController@contact');
Route::get('check-date', 'AppointmentController@checkDate');
Route::resource('department', 'DepartmentController');

Route::resource('revalidation', 'RevalidatedSchoolController');


Route::resource('form-template', 'FormTemplateController');
Route::resource('application', 'ApplicationsController');
Route::post('check-phase', 'ApplicationsController@checkPhase');
Route::resource('app-group', 'ApplicationGroupController');


