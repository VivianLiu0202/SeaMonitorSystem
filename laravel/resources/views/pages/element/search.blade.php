<x-base-layout :scrollspy="true">

    <x-slot:pageTitle>
        {{$title}} 
    </x-slot>

    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <x-slot:headerFiles>
        <!--  BEGIN CUSTOM STYLE FILE  -->
        @vite(['resources/scss/light/assets/elements/search.scss', 'resources/scss/dark/assets/elements/search.scss'])
        <!--  END CUSTOM STYLE FILE  -->
    </x-slot>
    <!-- END GLOBAL MANDATORY STYLES -->

    <x-slot:scrollspyConfig>
        data-bs-spy="scroll" data-bs-target="#navSection" data-bs-offset="100"
    </x-slot>
    
    <!-- BREADCRUMB -->
    <div class="page-meta">
        <nav class="breadcrumb-style-one" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Elements</a></li>
                <li class="breadcrumb-item active" aria-current="page">Search</li>
            </ol>
        </nav>
    </div>
    <!-- /BREADCRUMB -->

    <div id="navSection" data-bs-spy="affix" class="nav sidenav">
        <div class="sidenav-content">
            <a href="#searchLive" class="active nav-link">Live</a>
            <a href="#searchBoxed" class="nav-link">Boxed</a>
        </div>
    </div>

    <div class="row layout-top-spacing">

        <div id="searchLive" class="col-lg-12 layout-spacing">
            <div class="statbox widget box box-shadow">
                <div class="widget-header">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4>Live Search</h4>
                        </div>
                    </div>
                </div>
                <div class="widget-content widget-content-area text-center tags-content">
                    
                    <div class="row">
                        <div class="col-lg-8 col-md-8 col-sm-9 filtered-list-search mx-auto">
                            <form class="form-inline my-2 my-lg-0 justify-content-center">
                                <div class="w-100">
                                    <input type="text" class="w-100 form-control product-search br-30" id="input-search" placeholder="Search Attendees..." >
                                    <button class="btn btn-primary" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-12">

                            <div class="searchable-container">
                                <div class="row">
                                    <div class="col-md-12">

                                        <div class="searchable-items">
                                            <div class="items">
                                                <div class="user-profile">
                                                    <img src="{{Vite::asset('resources/images/profile-5.jpeg')}}" alt="avatar">
                                                </div>
                                                <div class="user-name">
                                                    <p class="">Alan Green</p>
                                                </div>
                                                <div class="user-email">
                                                    <p>alan@mail.com</p>
                                                </div>
                                                <div class="user-status">
                                                    <span class="badge outline-badge-info">Active</span>
                                                </div>
                                                <div class="action-btn">
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></p>
                                                </div>
                                            </div>

                                            <div class="items">
                                                <div class="user-profile">
                                                    <img src="{{Vite::asset('resources/images/profile-11.jpeg')}}" alt="avatar">
                                                </div>
                                                <div class="user-name">
                                                    <p class="">Linda Nelson</p>
                                                </div>
                                                <div class="user-email">
                                                    <p>Linda@mail.com</p>
                                                </div>
                                                <div class="user-status">
                                                    <span class="badge outline-badge-danger">Busy</span>
                                                </div>
                                                <div class="action-btn">
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></p>
                                                </div>
                                            </div>

                                            <div class="items">
                                                <div class="user-profile">
                                                    <img src="{{Vite::asset('resources/images/profile-12.jpeg')}}" alt="avatar">
                                                </div>
                                                <div class="user-name">
                                                    <p class="">Lila Perry</p>
                                                </div>
                                                <div class="user-email">
                                                    <p>Lila@mail.com</p>
                                                </div>
                                                <div class="user-status">
                                                    <span class="badge outline-badge-warning">Closed</span>
                                                </div>
                                                <div class="action-btn">
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></p>
                                                </div>
                                            </div> 


                                            <div class="items">
                                                <div class="user-profile">
                                                    <img src="{{Vite::asset('resources/images/profile-3.jpeg')}}" alt="avatar">
                                                </div>
                                                <div class="user-name">
                                                    <p class="">Andy King</p>
                                                </div>
                                                <div class="user-email">
                                                    <p>Andy@mail.com</p>
                                                </div>
                                                <div class="user-status">
                                                    <span class="badge outline-badge-info">Active</span>
                                                </div>
                                                <div class="action-btn">
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></p>
                                                </div>
                                            </div> 

                                            <div class="items">
                                                <div class="user-profile">
                                                    <img src="{{Vite::asset('resources/images/profile-15.jpeg')}}" alt="avatar">
                                                </div>
                                                <div class="user-name">
                                                    <p class="">Jesse Cory</p>
                                                </div>
                                                <div class="user-email">
                                                    <p>Jesse@mail.com</p>
                                                </div>
                                                <div class="user-status">
                                                    <span class="badge outline-badge-danger">Busy</span>
                                                </div>
                                                <div class="action-btn">
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></p>
                                                </div>
                                            </div> 


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="code-section-container show-code">
                                
                        <button class="btn toggle-code-snippet"><span>Code</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down toggle-code-icon"><polyline points="6 9 12 15 18 9"></polyline></svg></button>

                        <div class="code-section text-left">
                            <pre>
&lt;form class="form-inline my-2 my-lg-0 justify-content-center"&gt;
&lt;div class="w-100"&gt;
&lt;input type="text" class="w-100 form-control product-search br-30" id="input-search" placeholder="Search Attendees..." &gt;
&lt;button class="btn btn-primary" type="submit"&gt;&lt;svg&gt; ... &lt;/svg&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;
</pre>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div id="searchBoxed" class="col-lg-12 layout-spacing">
            <div class="statbox widget box box-shadow">
                <div class="widget-header">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4>Search Box</h4>
                        </div>
                    </div>
                </div>
                <div class="widget-content widget-content-area text-center tags-content">

                    <div class="search-input-group-style input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
                        <input type="text" class="form-control" placeholder="Let's find your question in fast way" aria-label="Username" aria-describedby="basic-addon1">
                    </div>

                    <div class="code-section-container">
                                
                        <button class="btn toggle-code-snippet"><span>Code</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down toggle-code-icon"><polyline points="6 9 12 15 18 9"></polyline></svg></button>

                        <div class="code-section text-left">
                            <pre>
&lt;div class="search-input-group-style input-group mb-3"&gt;
&lt;div class="input-group-prepend"&gt;
&lt;span class="input-group-text" id="basic-addon1"&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"&gt;&lt;circle cx="11" cy="11" r="8"&gt;&lt;/circle&gt;&lt;line x1="21" y1="21" x2="16.65" y2="16.65"&gt;&lt;/line&gt;&lt;/svg&gt;&lt;/span&gt;
&lt;/div&gt;
&lt;input type="text" class="form-control" placeholder="Let's find your question in fast way" aria-label="Username" aria-describedby="basic-addon1"&gt;
&lt;/div&gt;
</pre>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
    
    <!--  BEGIN CUSTOM SCRIPTS FILE  -->
    <x-slot:footerFiles>
        <script src="{{asset('plugins/global/vendors.min.js')}}"></script>
        @vite(['resources/assets/js/elements/custom-search.js'])
    </x-slot>
    <!--  END CUSTOM SCRIPTS FILE  -->
</x-base-layout>