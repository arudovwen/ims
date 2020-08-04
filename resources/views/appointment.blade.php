<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>New SCHEDULE</title>
    <style>
        ul{
            list-style: none;
        }
    </style>
</head>
<body>
  

   <div @if($info['receiver'] =='external')>
    <h4> You’ve been scheduled!
    </h4>
    <p>
        Your have been scheduled for a meeting at the Imo State Ministry of Education, Block 3, Imo State Secretariat Complex, Portharcourt Road, Owerri.  </p>

        <div>
            Date: {{$info['date']}} <br>
            Time:  {{$info['time']}}
        </div>
        <div>
          <p>  Please come at least 10mins before scheduled time. 
        </p>
          <p>  We hope you have a productive visit. </p>
            
           <p> Sincerely,</p>
           <p> Reception @ IMoE.</p>
        </div>
   </div>



   <div  @else >
    <h4>  You’ve been Booked!

    </h4>
    <p>
        Your have been booked for a meeting at the Imo State Ministry of Education, Block 3, Imo State Secretariat Complex, Portharcourt Road, Owerri. 
    </p>

        <div>
           <ul>
               <li> Full Name:  {{$info->name}}</li>
               <li> Email  {{$info->email}}</li>
                <li> Phone No:  {{$info->phone_no}}</li>
                    <li> Organisation:  {{$info->organization}}</li>
                        <li> Type of visit:  {{$info->type}}</li>
                            <li> Reason for Visit:  {{$info->reason_for_visit}}</li>
                                <li> Whom to see:  {{$info->whom_to_see}} </li>
                                    <li> Department :  {{$info->department}}</li>
                                        <li>  Date:  {{$info->date}}  </li>
                                            <li>  Time :  {{$info->time}}</li>
           </ul>
        </div>
        <div>
        
        </p>
          <p> We hope you have a productive meeting.  </p>
            
           <p> Sincerely,</p>
           <p> Reception @ IMoE.</p>
        </div>
   </div @endif>
</body>
</html>