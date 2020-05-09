# Stampready

This Email is integrated with StampReady, so you can use it in their modern email builder.

::: tip

In order to use StampReady's builder, you need to first sign up for a free account ↗ on their site. Once you have an account, you can proceed to upload ↓ and start using our product with their platform.
:::

## Structure

The StampReady-integrated files can be found in the ``Files/stampready`` folder from your download.

This folder has the same structure as the Files/html folder, only that all files inside it are editable or ready to use with StampReady:

- /all-in-one - all-in-one template .zip file

Only the all-in-one template .zip file from the ``Files/stampready/all-in-one`` folder can be uploaded directly to StampReady in order to be used in a campaign. All others are just for creating a StampReady-compatible template yourself, which you then upload to their service.

If you're planning on creating a StampReady template yourself, please first take a look at their developer documentation , and then at our own templates to understand how to do it.

## Uploading

Inside the ``Files/stampready/all-in-one/`` folder, you'll find the .zip file that you need to upload to StampReady.

1. In StampReady, go to Campaigns → New Campaign.
2. Click "Import Template" on the top right, and select "ZIP FILE" from the dropdown.
3. Browse for our StampReady .zip file as described above, select to upload it, and you're done: StampReady will show you a preview of the template you are about to import. Simply confirm and start using their editor.
Note

::: tip
Again, the file for StampReady contains all sections, so don't worry if you see a very long template with lots and lots of sections when you see the preview confirmation after uploading. That's how StampReady works, and you will be creating the exact layout you need (starting from a blank canvas) in their builder, once you confirm the import.
:::

## Supported Attributes

The following StampReady attributes are supported in Sartre Email:

#### Template Attributes

- ``data-repeatable`` - Editor 3.0 feature. Allows repeating content inside a section. Selected modules only.
- ``data-group`` - Editor 3.0 feature. Organises section draggable thumbnails into named groups.
- ``data-crop`` - set to false, it disables the cropping pop-up when uploading an image
- ``data-module`` - allows dragging and dropping modules to build your layout
- ``data-border``-color - change border colour for sections that have borders
- ``data-height`` - Editor 3.0 feature. Allows adjusting spacer height.
- ``data-bgcolor`` - allows changing background colours
- ``data-thumb`` - draggable thumbnail previews
- ``data-bg`` - for background images
- ``data-color`` - text colour
- ``data-size`` - font sizing

#### Personalization Variables

- ``sr_view_online ``- optional "view in browser" URL
- ``sr_unsubscribe`` - mandatory unsubscribe tag

For reference, please see StampReady's Developer Guide ([here](https://www.stampready.net/developer/index.php)).

## Customisation

StampReady has one of the best email template builders around, at the moment. It offers great flexibility and it even allows exporting the HTML to desktop, so you can then import it ready-customized in other services that have less capable builders, such as MailChimp or Campaign Monitor.

## Limitations & Other Notes

Although StampReady's builder is quite advanced and flexible, it still has its drawbacks, at least for now.

#### Conflicting Browser Plugins

The Grammarly browser plugin severely affects online email editors, including MailChimp. By injecting itself into the page, it corrupts email HTML, resulting in a broken template.

:::warning
Please disable any plugins such as Grammarly or AdBlock when using an online email builder. As a rule of thumb, we recommend disabling any plugins that manipulate content on a web page when using any of the integrations provided with our email templates.
:::

#### Elements changed/removed

When exporting from StampReady, some required elements are changed or completely removed from our original template.

For example, the ``<!DOCTYPE html>`` and ``<html>`` tags are being replaced with their own tags, which can break background images in Outlook or lead to unexpected behavior in various email clients.

We're covering the Outlook background images issue for you (our Outlook VML code has the xmlns="" attribute set inline), but to ensure nothing else is impacted and that you use the template as we intended, you will need to add our original tags back.

Replace the doctype and html tags from what you've exported from StampReady:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTDxhtml1-transitional.dtd">
  <html>
```

With this:

```html
<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
```

#### Outlook Styles

StampReady currently has limited support for what it allows in the ``<head>`` area.

Sartre Email uses Acorn's Outlook-targeted style block, which defines typography and layout resets just for this email client. Additionally, it also keeps rendering consistent on hi-DPI screens.

Currently, StampReady removes this in the final email, so you need to add it back yourself. If you don't, Outlook rendering will be off and the font will fallback to Times New Roman.

This is the code you need to add just before ``<style type="text/css">``, in the ``<head>`` area:

```html
<!--[if mso]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
<![endif]-->
```

#### Code bloat

It looks like, at least for now, StampReady's Builder does not clean up after itself when you export the HTML.

We've noticed that all their editor ``data-`` attributes aren't removed from the exported HTML (this adds up to the email size), and there are sometimes even leftovers from the builder itself (like wrapper divs, inline styles, unnecessary extra code indentation).

With these in mind, we highly advise manually cleaning up the HTML, for optimal results.

:::tip
As always, test before you send!
:::