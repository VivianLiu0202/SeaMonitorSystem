<x-base-layout :scrollspy="false">

    <x-slot:pageTitle>
        {{$title}} 
    </x-slot>

    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <x-slot:headerFiles>
        <!--  BEGIN CUSTOM STYLE FILE  -->
        <link rel="stylesheet" href="{{asset('plugins/fullcalendar/fullcalendar.min.css')}}">
        @vite(['resources/scss/light/plugins/fullcalendar/custom-fullcalendar.scss'])
        @vite(['resources/scss/light/assets/components/modal.scss'])

        @vite(['resources/scss/dark/plugins/fullcalendar/custom-fullcalendar.scss'])
        @vite(['resources/scss/dark/assets/components/modal.scss'])
        <!--  END CUSTOM STYLE FILE  -->
    </x-slot>
    <!-- END GLOBAL MANDATORY STYLES -->
    
    <div class="row layout-top-spacing layout-spacing" id="cancel-row">
        <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="calendar-container">
                <div class="calendar"></div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="row">
                        <div class="col-md-12">
                            <div class="">
                                <label class="form-label">Enter Title</label>
                                <input id="event-title" type="text" class="form-control">
                            </div>
                        </div>

                        <div class="col-md-12 d-none">
                            <div class="">
                                <label class="form-label">Enter Start Date</label>
                                <input id="event-start-date" type="text" class="form-control">
                            </div>
                        </div>

                        <div class="col-md-12 d-none">
                            <div class="">
                                <label class="form-label">Enter End Date</label>
                                <input id="event-end-date" type="text" class="form-control">
                            </div>
                        </div>
                        
                        <div class="col-md-12">

                            <div class="d-flex mt-4">
                                <div class="n-chk">
                                    <div class="form-check form-check-primary form-check-inline">
                                        <input class="form-check-input" type="radio" name="event-level" value="Work" id="rwork">
                                        <label class="form-check-label" for="rwork">Work</label>
                                    </div>
                                </div>
                                <div class="n-chk">
                                    <div class="form-check form-check-warning form-check-inline">
                                        <input class="form-check-input" type="radio" name="event-level" value="Travel" id="rtravel">
                                        <label class="form-check-label" for="rtravel">Travel</label>
                                    </div>
                                </div>
                                <div class="n-chk">
                                    <div class="form-check form-check-success form-check-inline">
                                        <input class="form-check-input" type="radio" name="event-level" value="Personal" id="rPersonal">
                                        <label class="form-check-label" for="rPersonal">Personal</label>
                                    </div>
                                </div>
                                <div class="n-chk">
                                    <div class="form-check form-check-danger form-check-inline">
                                        <input class="form-check-input" type="radio" name="event-level" value="Important" id="rImportant">
                                        <label class="form-check-label" for="rImportant">Important</label>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success btn-update-event" data-fc-event-public-id="">Update changes</button>
                    <button type="button" class="btn btn-primary btn-add-event">Add Event</button>
                </div>
            </div>
        </div>
    </div>

    
    <!--  BEGIN CUSTOM SCRIPTS FILE  -->
    <x-slot:footerFiles>
        
        <script src="{{asset('plugins/fullcalendar/fullcalendar.min.js')}}"></script>
        <script src="{{asset('plugins/uuid/uuid4.min.js')}}"></script>
        <script src="{{asset('plugins/fullcalendar/custom-fullcalendar.js')}}"></script>
    
    </x-slot>
    <!--  END CUSTOM SCRIPTS FILE  -->
</x-base-layout>