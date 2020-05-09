# Other ESPs

## Other ESPs Compatibility Notes

Our templates work with most email service providers, even though a dedicated integration isn't included. The reason we don't provide an integration for them is mainly because these services don't provide a templating language that we can use to integrate our templates with their editors.

You can, however, upload the standard HTML version to these ESPs, altough in some cases you will not be able to edit the content in a WYSIWYG editor, as it the case with the dedicated integrations we provide.

The following is a compatibility table that lists any issues we've encountered while testing, with advice on how to handle them.

## Generic

We have encountered the following issues in several email service providers that don't provide template integration capabilities, or a template editor.

#### Images not showing 
Many ESPs allow you to import your custom HTML, without offering a visual template builder or at least an option to upload images along with the HTML. To have images show up, always make sure you have used absolute URLs for your images - i.e. images need to be hosted somewhere and linked to from your HTML.

If your ESP allows editing the template after import (either in code or visual editor), you can simply upload the standard HTML version as it is, and change the image paths afterwards.

#### Background images are not editable

Just as with Campaign Monitor, you need to manually edit the URL of the background image (before uploading, or in their code editor, if the service provides one). [See how →](/guide/integration/CampainMonitor) 

:::tip
As always, test before you send!
:::


