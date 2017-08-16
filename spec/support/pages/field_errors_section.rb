module Pages
	class FieldErrorsSection < SitePrism::Section
		element :field_name, '[data-field-name]'
		elements :errors, ".ui.error ul.list li.content"
	end
end
