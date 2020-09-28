jQuery(document).ready(function($) {
	const checkbox = {
		fun: function(){
			$('label.checkbox').each(function(event) {
				if($(this).find('input').prop('checked') == true) $(this).addClass('active');
					else $(this).removeClass('active');
			});
			$('label.checkbox').click(function(event) {
				$('label.checkbox').each(function(event) {
					if($(this).find('input').prop('checked') == true) $(this).addClass('active');
						else $(this).removeClass('active');
				});
			});
		}
	}
	checkbox.fun();
});



const open_window = (name_modal, title, text) => {
	$('html, body').addClass('body-modal');
	$('.modal-window').fadeOut(400).removeClass('active');
	$('.modal-window[data-modal="' + name_modal +'"]').fadeIn(400).addClass('active');
	if(name_modal == 'info-modal'){
		$('.modal-window[data-modal="' + name_modal +'"]').find('h3').html(title);
		$('.modal-window[data-modal="' + name_modal +'"]').find('p').html(text);
	}
	if(name_modal == 'authorization'){
		start_send_sms.fun();
	}
}
// open_window('info-modal', 'title', 'text')
function info_fun(text_1, text_2) {
	open_window('info-modal', text_1, text_2)
}

function addErrorByName(class_form, name_input, text) {
	class_form.find('input[name="' + name_input + '"]').parents('label').addClass('error-label').append('<span class="error-span">' + text + '</span>');
}

function addFormError(class_form, text) {
	class_form.append('<span class="error_form">' + text + '</span>')
}

function removeFormErrors(class_form) {
	class_form.find('label').each(function (index, el) {
		$(this).removeClass('error-label');
		$(this).find('.error-span').remove();
	});
	class_form.find('.submit .error_form').remove();
}