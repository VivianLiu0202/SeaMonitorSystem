<x-base-layout :scrollspy="false">

    <x-slot:pageTitle>
        {{$title}} 
    </x-slot>

    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <x-slot:headerFiles>
        <!--  BEGIN CUSTOM STYLE FILE  -->
        @vite(['resources/scss/light/assets/components/modal.scss'])
        @vite(['resources/scss/light/assets/apps/contacts.scss'])

        @vite(['resources/scss/dark/assets/components/modal.scss'])
        @vite(['resources/scss/dark/assets/apps/contacts.scss'])
        <!--  END CUSTOM STYLE FILE  -->
    </x-slot>
    <!-- END GLOBAL MANDATORY STYLES -->
    
    <div class="row layout-spacing layout-top-spacing" id="cancel-row">
        <div class="col-lg-12">
            <div class="widget-content searchable-container list">

                <div class="row">
                    <div class="col-xl-4 col-lg-5 col-md-5 col-sm-7 filtered-list-search layout-spacing align-self-center">
                        <form class="form-inline my-2 my-lg-0">
                            <div class="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <input type="text" class="form-control product-search" id="input-search" placeholder="Search Contacts...">
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-8 col-lg-7 col-md-7 col-sm-5 text-sm-right text-center layout-spacing align-self-center">
                        <div class="d-flex justify-content-sm-end justify-content-center">
                            <svg id="btn-add-contact" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>

                            <div class="switch align-self-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list view-list active-view"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid view-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                            </div>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="addContactModal" tabindex="-1" role="dialog" aria-labelledby="addContactModalTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title add-title" id="addContactModalTitleLabel1">Add Contact</h5>
                                        <h5 class="modal-title edit-title" id="addContactModalTitleLabel2" style="display: none;">Edit Contact</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                        </button>
                                    </div>

                                    <div class="modal-body">
                                        <div class="add-contact-box">
                                            <div class="add-contact-content">
                                                <form id="addContactModalTitle">
                                                    <div class="row">
                                                        <div class="col-md-6 mb-3">
                                                            <div class="contact-name">
                                                                <input type="text" id="c-name" class="form-control" placeholder="Name">
                                                                <span class="validation-text"></span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 mb-3">
                                                            <div class="contact-email">
                                                                <input type="text" id="c-email" class="form-control" placeholder="Email">
                                                                <span class="validation-text"></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6 mb-3">
                                                            <div class="contact-occupation">
                                                                <input type="text" id="c-occupation" class="form-control" placeholder="Occupation">
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6 mb-3">
                                                            <div class="contact-phone">
                                                                <input type="text" id="c-phone" class="form-control" placeholder="Phone">
                                                                <span class="validation-text"></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="contact-location">
                                                                <input type="text" id="c-location" class="form-control" placeholder="Location">
                                                            </div>
                                                        </div>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button id="btn-edit" class="float-left btn btn-success">Save</button>

                                        <button class="btn" data-bs-dismiss="modal"> <i class="flaticon-delete-1"></i> Discard</button>

                                        <button id="btn-add" class="btn btn-primary">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="searchable-items list">
                    <div class="items items-header-section">
                        <div class="item-content">
                            <div class="d-inline-flex">
                                <div class="n-chk align-self-center text-center">
                                    <div class="form-check form-check-primary me-0 mb-0">
                                        <input class="form-check-input inbox-chkbox" id="contact-check-all" type="checkbox">
                                    </div>
                                </div>
                                <h4>Name</h4>
                            </div>
                            <div class="user-email">
                                <h4>Email</h4>
                            </div>
                            <div class="user-location">
                                <h4 style="margin-left: 0;">Location</h4>
                            </div>
                            <div class="user-phone">
                                <h4 style="margin-left: 3px;">Phone</h4>
                            </div>
                            <div class="action-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2  delete-multiple"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                            </div>
                        </div>
                    </div>

                    <div class="items">
                        <div class="item-content">
                            <div class="user-profile">
                                <div class="n-chk align-self-center text-center">
                                    <div class="form-check form-check-primary me-0 mb-0">
                                        <input class="form-check-input inbox-chkbox contact-chkbox" type="checkbox">
                                    </div>
                                </div>
                                <img src="{{Vite::asset('resources/images/profile-5.jpeg')}}" alt="avatar">
                                <div class="user-meta-info">
                                    <p class="user-name" data-name="Alan Green">Alan Green</p>
                                    <p class="user-work" data-occupation="Web Developer">Web Developer</p>
                                </div>
                            </div>
                            <div class="user-email">
                                <p class="info-title">Email: </p>
                                <p class="usr-email-addr" data-email="alan@mail.com">alan@mail.com</p>
                            </div>
                            <div class="user-location">
                                <p class="info-title">Location: </p>
                                <p class="usr-location" data-location="Boston, USA">Boston, USA</p>
                            </div>
                            <div class="user-phone">
                                <p class="info-title">Phone: </p>
                                <p class="usr-ph-no" data-phone="+1 (070) 123-4567">+1 (070) 123-4567</p>
                            </div>
                            <div class="action-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 edit"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-minus delete"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                            </div>
                        </div>
                    </div>

                    <div class="items">
                        <div class="item-content">
                            <div class="user-profile">
                                <div class="n-chk align-self-center text-center">
                                    <div class="form-check form-check-primary me-0 mb-0">
                                        <input class="form-check-input inbox-chkbox contact-chkbox" type="checkbox">
                                    </div>
                                </div>
                                <img src="{{Vite::asset('resources/images/profile-11.jpeg')}}" alt="avatar">
                                <div class="user-meta-info">
                                    <p class="user-name" data-name="Linda Nelson">Linda Nelson</p>
                                    <p class="user-work" data-occupation="Web Designer">Web Designer</p>
                                </div>
                            </div>
                            <div class="user-email">
                                <p class="info-title">Email: </p>
                                <p class="usr-email-addr" data-email="linda@mail.com">linda@mail.com</p>
                            </div>
                            <div class="user-location">
                                <p class="info-title">Location: </p>
                                <p class="usr-location" data-location="Sydney, Australia">Sydney, Australia</p>
                            </div>
                            <div class="user-phone">
                                <p class="info-title">Phone: </p>
                                <p class="usr-ph-no" data-phone="+1 (070) 123-4567">+1 (070) 123-4567</p>
                            </div>
                            <div class="action-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 edit"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-minus delete"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                            </div>
                        </div>
                    </div>

                    <div class="items">
                        <div class="item-content">
                            <div class="user-profile">
                                <div class="n-chk align-self-center text-center">
                                    <div class="form-check form-check-primary me-0 mb-0">
                                        <input class="form-check-input inbox-chkbox contact-chkbox" type="checkbox">
                                    </div>
                                </div>
                                <img src="{{Vite::asset('resources/images/profile-12.jpeg')}}" alt="avatar">
                                <div class="user-meta-info">
                                    <p class="user-name" data-name="Lila Perry">Lila Perry</p>
                                    <p class="user-work" data-occupation="UX/UI Designer">UX/UI Designer</p>
                                </div>
                            </div>
                            <div class="user-email">
                                <p class="info-title">Email: </p>
                                <p class="usr-email-addr" data-email="lila@mail.com">lila@mail.com</p>
                            </div>
                            <div class="user-location">
                                <p class="info-title">Location: </p>
                                <p class="usr-location" data-location="Miami, USA">Miami, USA</p>
                            </div>
                            <div class="user-phone">
                                <p class="info-title">Phone: </p>
                                <p class="usr-ph-no" data-phone="+1 (070) 123-4567">+1 (070) 123-4567</p>
                            </div>
                            <div class="action-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 edit"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-minus delete"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                            </div>
                        </div>
                    </div>

                    <div class="items">
                        <div class="item-content">
                            <div class="user-profile">
                                <div class="n-chk align-self-center text-center">
                                    <div class="form-check form-check-primary me-0 mb-0">
                                        <input class="form-check-input inbox-chkbox contact-chkbox" type="checkbox">
                                    </div>
                                </div>
                                <img src="{{Vite::asset('resources/images/profile-3.jpeg')}}" alt="avatar">
                                <div class="user-meta-info">
                                    <p class="user-name" data-name="Andy King">Andy King</p>
                                    <p class="user-work" data-occupation="Web Developer">Project Lead</p>
                                </div>
                            </div>
                            <div class="user-email">
                                <p class="info-title">Email: </p>
                                <p class="usr-email-addr" data-email="andy@mail.com">andy@mail.com</p>
                            </div>
                            <div class="user-location">
                                <p class="info-title">Location: </p>
                                <p class="usr-location" data-location="Tokyo, Japan">Tokyo, Japan</p>
                            </div>
                            <div class="user-phone">
                                <p class="info-title">Phone: </p>
                                <p class="usr-ph-no" data-phone="+1 (070) 123-4567">+1 (070) 123-4567</p>
                            </div>
                            <div class="action-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 edit"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-minus delete"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                            </div>
                        </div>
                    </div>

                    <div class="items">
                        <div class="item-content">
                            <div class="user-profile">
                                <div class="n-chk align-self-center text-center">
                                    <div class="form-check form-check-primary me-0 mb-0">
                                        <input class="form-check-input inbox-chkbox contact-chkbox" type="checkbox">
                                    </div>
                                </div>
                                <img src="{{Vite::asset('resources/images/profile-15.jpeg')}}" alt="avatar">
                                <div class="user-meta-info">
                                    <p class="user-name" data-name="Jesse Cory">Jesse Cory</p>
                                    <p class="user-work" data-occupation="Web Developer">Web Developer</p>
                                </div>
                            </div>
                            <div class="user-email">
                                <p class="info-title">Email: </p>
                                <p class="usr-email-addr" data-email="jesse@mail.com">jesse@mail.com</p>
                            </div>
                            <div class="user-location">
                                <p class="info-title">Location: </p>
                                <p class="usr-location" data-location="Edinburgh, UK">Edinburgh, UK</p>
                            </div>
                            <div class="user-phone">
                                <p class="info-title">Phone: </p>
                                <p class="usr-ph-no" data-phone="+1 (070) 123-4567">+1 (070) 123-4567</p>
                            </div>
                            <div class="action-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 edit"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-minus delete"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                            </div>
                        </div>
                    </div>

                    <div class="items">
                        <div class="item-content">
                            <div class="user-profile">
                                <div class="n-chk align-self-center text-center">
                                    <div class="form-check form-check-primary me-0 mb-0">
                                        <input class="form-check-input inbox-chkbox contact-chkbox" type="checkbox">
                                    </div>
                                </div>
                                <img src="{{Vite::asset('resources/images/profile-7.jpeg')}}" alt="avatar">
                                <div class="user-meta-info">
                                    <p class="user-name" data-name="Xavier">Xavier</p>
                                    <p class="user-work" data-occupation="UX/UI Designer">UX/UI Designer</p>
                                </div>
                            </div>
                            <div class="user-email">
                                <p class="info-title">Email: </p>
                                <p class="usr-email-addr" data-email="xavier@mail.com">xavier@mail.com</p>
                            </div>
                            <div class="user-location">
                                <p class="info-title">Location: </p>
                                <p class="usr-location" data-location="New York, USA">New York, USA</p>
                            </div>
                            <div class="user-phone">
                                <p class="info-title">Phone: </p>
                                <p class="usr-ph-no" data-phone="+1 (070) 123-4567">+1 (070) 123-4567</p>
                            </div>
                            <div class="action-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 edit"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-minus delete"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                            </div>
                        </div>
                    </div>

                    <div class="items">
                        <div class="item-content">
                            <div class="user-profile">
                                <div class="n-chk align-self-center text-center">
                                    <div class="form-check form-check-primary me-0 mb-0">
                                        <input class="form-check-input inbox-chkbox contact-chkbox" type="checkbox">
                                    </div>
                                </div>
                                <img src="{{Vite::asset('resources/images/profile-18.jpeg')}}" alt="avatar">
                                <div class="user-meta-info">
                                    <p class="user-name" data-name="Susan">Susan</p>
                                    <p class="user-work" data-occupation="Project Manager">Project Manager</p>
                                </div>
                            </div>
                            <div class="user-email">
                                <p class="info-title">Email: </p>
                                <p class="usr-email-addr" data-email="susan@mail.com">susan@mail.com</p>
                            </div>
                            <div class="user-location">
                                <p class="info-title">Location: </p>
                                <p class="usr-location" data-location="Miami, USA">Miami, USA</p>
                            </div>
                            <div class="user-phone">
                                <p class="info-title">Phone: </p>
                                <p class="usr-ph-no" data-phone="+1 (070) 123-4567">+1 (070) 123-4567</p>
                            </div>
                            <div class="action-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 edit"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-minus delete"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                            </div>
                        </div>
                    </div>

                    <div class="items">
                        <div class="item-content">
                            <div class="user-profile">
                                <div class="n-chk align-self-center text-center">
                                    <div class="form-check form-check-primary me-0 mb-0">
                                        <input class="form-check-input inbox-chkbox contact-chkbox" type="checkbox">
                                    </div>
                                </div>
                                <img src="{{Vite::asset('resources/images/profile-29.jpeg')}}" alt="avatar">
                                <div class="user-meta-info">
                                    <p class="user-name" data-name="Traci Lopez">Traci Lopez</p>
                                    <p class="user-work" data-occupation="Web Developer">Web Developer</p>
                                </div>
                            </div>
                            <div class="user-email">
                                <p class="info-title">Email: </p>
                                <p class="usr-email-addr" data-email="traci@mail.com">traci@mail.com</p>
                            </div>
                            <div class="user-location">
                                <p class="info-title">Location: </p>
                                <p class="usr-location" data-location="Edinburgh, UK">Edinburgh, UK</p>
                            </div>
                            <div class="user-phone">
                                <p class="info-title">Phone: </p>
                                <p class="usr-ph-no" data-phone="+1 (070) 123-4567">+1 (070) 123-4567</p>
                            </div>
                            <div class="action-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 edit"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-minus delete"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
    <!--  BEGIN CUSTOM SCRIPTS FILE  -->
    <x-slot:footerFiles>
        @vite(['resources/assets/js/custom.js'])
        <script src="{{asset('plugins/global/vendors.min.js')}}"></script>
        <script src="{{asset('plugins/jquery-ui/jquery-ui.min.js')}}"></script>
        @vite(['resources/assets/js/apps/contact.js'])
    </x-slot>
    <!--  END CUSTOM SCRIPTS FILE  -->
</x-base-layout>