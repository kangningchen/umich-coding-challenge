$(document).ready(function() {

	$('form').on('submit', function(event) {

        $('#sum').hide();

		$.ajax({
            url : '/sum',
			data : $('form').serialize(),
            type : 'POST',
            success: function(data) {
                if (data.error) {
                    $('#sum').text(data.error).show("slow");
                } 
                else {
                    if (data.sum) {
                        $('#sum').text('The sum is...' + data.sum + '!').show('slow');
                    }
                    else {
                        $('#sum').text('Aha...there\'s no number in the string').show('slow');
                    }
                }
            },
            error: function(error) {
                console.log(error);
            }
		})

		event.preventDefault();

    });
    
    $('#string').on('input', function() {
        $('#sum').hide();
    })

});