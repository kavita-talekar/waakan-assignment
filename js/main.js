$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        stepsOrientation: "vertical",
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Back Step',
            next : '<i class="zmdi zmdi-arrow-right"></i>',
            finish : '<i class="zmdi zmdi-check"></i>',
            current : ''
        }
    });
    // $("form[name='registration']").validate({
    //     rules: { 
    //       fullname : "required",
    //       address: "required",
    //       email: {
    //         required: true,
    //         email: true
    //       },
         
    //     },
    //     // Specify validation error messages
    //     messages: {
    //       name: "Please enter your firstname",
    //       addres: "Please enter your address",

    //       email: "Please enter a valid email address"
    //     },

    //     submitHandler: function(form) {
    //       form.submit();
    //     }
    //   });
    $('#dob').dcalendarpicker();
});

function show_desc_1()
	{
		document.getElementById('text_desc_1').style.display="block";
    }
    function show_desc_2()
	{
		document.getElementById('text_desc_2').style.display="block";
    }
    function show_desc_3()
	{
		document.getElementById('text_desc_3').style.display="block";
    }
    function show_desc_4()
	{
		document.getElementById('text_desc_4').style.display="block";
    }
    
    

    function hide_desc_1()
	{
	document.getElementById('text_desc_1').style.display="none";
}
    function hide_desc_2()
    {
    document.getElementById('text_desc_2').style.display="none";
}
    function hide_desc_3()
	{
        document.getElementById('text_desc_3').style.display="none";
    }
    function hide_desc_4()
	{
        document.getElementById('text_desc_4').style.display="none";
    }
    


