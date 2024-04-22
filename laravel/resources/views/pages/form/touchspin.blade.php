<x-base-layout :scrollspy="true">

    <x-slot:pageTitle>
        {{$title}} 
    </x-slot>

    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <x-slot:headerFiles>
        <!--  BEGIN CUSTOM STYLE FILE  -->
        <link rel="stylesheet" type="text/css" href="{{asset('plugins/bootstrap-touchspin/jquery.bootstrap-touchspin.min.css')}}">
        @vite(['resources/scss/light/plugins/bootstrap-touchspin/custom-jquery.bootstrap-touchspin.min.scss'])
        @vite(['resources/scss/dark/plugins/bootstrap-touchspin/custom-jquery.bootstrap-touchspin.min.scss'])
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
                <li class="breadcrumb-item"><a href="#">Form</a></li>
                <li class="breadcrumb-item active" aria-current="page">TouchSpin</li>
            </ol>
        </nav>
    </div>
    <!-- /BREADCRUMB -->

    <div id="navSection" data-bs-spy="affix" class="nav  sidenav">
        <div class="sidenav-content">
            <a href="#fbtPostfix" class="active nav-link">Postfix</a>
            <a href="#fbtPrefix" class="nav-link">Prefix</a>
            <a href="#fbtMultiple" class="nav-link">Multiple</a>
            <a href="#fbtVerticalBtns" class="nav-link">Vertical Buttons</a>
            <a href="#fbtValueAttribute" class="nav-link">Value Attribute</a>
            <a href="#fbtButtonPostfix" class="nav-link">Button Postfix</a>
            <a href="#fbtChangeBtnClass" class="nav-link">Change Button Class</a>
        </div>
    </div>
    
    <div class="row layout-top-spacing">
    
        <div id="fbtPostfix" class="col-lg-12 layout-spacing">
            <div class="statbox widget box box-shadow">
                <div class="widget-header">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4>Example with postfix</h4>
                        </div>
                    </div>
                </div>
                <div class="widget-content widget-content-area">
                    <div class="mb-4">
                        <input id="demo1" type="text" value="55" name="demo1">
                    </div>

                    <div class="code-section-container show-code">
                                
                        <button class="btn toggle-code-snippet"><span>Code</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down toggle-code-icon"><polyline points="6 9 12 15 18 9"></polyline></svg></button>

                        <div class="code-section text-left">
                            <pre>
// Example with postfix (large)
$("input[name='demo1']").TouchSpin({
postfix: '%'
});
</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="fbtPrefix" class="col-lg-12 layout-spacing">
            <div class="statbox widget box box-shadow">
                <div class="widget-header">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4>With prefix</h4>
                        </div>
                    </div>
                </div>
                <div class="widget-content widget-content-area">
                    <form class="form-horizontal">
                        <div class="form-group mb-4">
                            <input id="demo2" type="text" value="0" name="demo2" class="form-control">
                        </div>
                    </form>

                    <div class="code-section-container">
                                
                        <button class="btn toggle-code-snippet"><span>Code</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down toggle-code-icon"><polyline points="6 9 12 15 18 9"></polyline></svg></button>

                        <div class="code-section text-left">
                            <pre>
// With prefix
$("input[name='demo2']").TouchSpin({
prefix: '%',
});
</pre>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div id="fbtMultiple" class="col-lg-12 layout-spacing">
            <div class="statbox widget box box-shadow">
                <div class="widget-header">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4>Multiple select boxes</h4>
                        </div>
                    </div>
                </div>
                <div class="widget-content widget-content-area">
                    <div class="mb-4">
                        <input id="demo_vertical" type="text" value="" name="demo_vertical">
                    </div>

                    <div class="code-section-container">
                                
                        <button class="btn toggle-code-snippet"><span>Code</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down toggle-code-icon"><polyline points="6 9 12 15 18 9"></polyline></svg></button>

                        <div class="code-section text-left">
                            <pre>
// Multiple select boxes
$("input[name='demo_vertical']").TouchSpin({
verticalbuttons: true,
});
</pre>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div id="fbtVerticalBtns" class="col-lg-12 layout-spacing">
            <div class="statbox widget box box-shadow">
                <div class="widget-header">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4>Vertical buttons with custom icons</h4>
                        </div>
                    </div>
                </div>
                <div class="widget-content widget-content-area">
                    <div class="mb-4">
                        <input id="demo_vertical2" type="text" value="" name="demo_vertical2">
                    </div>

                    <div class="code-section-container">
                                
                        <button class="btn toggle-code-snippet"><span>Code</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down toggle-code-icon"><polyline points="6 9 12 15 18 9"></polyline></svg></button>

                        <div class="code-section text-left">
                            <pre>
// Vertical buttons with custom icons
$("input[name='demo_vertical2']").TouchSpin({
verticalbuttons: true,
verticalup: '&lt;svg&gt; ... &lt;/svg&gt;',
verticaldown: '&lt;svg&gt; ... &lt;/svg&gt;',
});
</pre>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div id="fbtValueAttribute" class="col-lg-12 layout-spacing">
            <div class="statbox widget box box-shadow">
                <div class="widget-header">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4>Value attribute is not set (applying settings.initval)</h4>
                        </div>
                    </div>
                </div>
                <div class="widget-content widget-content-area">
                    <div class="mb-4">
                        <input id="demo3_21" type="text" value="" name="demo3_21">
                    </div>

                    <div class="code-section-container">                                                
                        <button class="btn toggle-code-snippet"><span>Code</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down toggle-code-icon"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
                        <div class="code-section text-left">
                            <pre>
// Value attribute is not set (applying settings.initval)
$("input[name='demo3_21']").TouchSpin({
initval: 40
});
</pre>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div id="fbtButtonPostfix" class="col-lg-12 layout-spacing">
            <div class="statbox widget box box-shadow">
                <div class="widget-header">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4>Button postfix</h4>
                        </div>
                    </div>
                </div>
                <div class="widget-content widget-content-area">
                    <div class="mb-4">
                        <input id="demo4" type="text" value="" name="demo4" class="input-sm">
                    </div>

                    <div class="code-section-container">
                                
                        <button class="btn toggle-code-snippet"><span>Code</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down toggle-code-icon"><polyline points="6 9 12 15 18 9"></polyline></svg></button>

                        <div class="code-section text-left">
                            <pre>
// Button postfix
$("input[name='demo4']").TouchSpin({
postfix: "Button",
postfix_extraclass: "btn btn-outline-info",
});
</pre>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div id="fbtChangeBtnClass" class="col-lg-12 layout-spacing">
            <div class="statbox widget box box-shadow">
                <div class="widget-header">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4>Change button class</h4>
                        </div>
                    </div>
                </div>
                <div class="widget-content widget-content-area">
                    <div class="mb-4">
                        <input id="demo6" type="text" value="" name="demo6" class="">
                    </div>

                    <div class="code-section-container">
                                
                        <button class="btn toggle-code-snippet"><span>Code</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down toggle-code-icon"><polyline points="6 9 12 15 18 9"></polyline></svg></button>

                        <div class="code-section text-left">
                            <pre>
// Change button class
$("input[name='demo6']").TouchSpin({
buttondown_class: "btn btn-classic btn-danger",
buttonup_class: "btn btn-classic btn-success"
});
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
        <script src="{{asset('plugins/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js')}}"></script>
        <script src="{{asset('plugins/bootstrap-touchspin/custom-bootstrap-touchspin.js')}}"></script>
    </x-slot>
    <!--  END CUSTOM SCRIPTS FILE  -->
</x-base-layout>