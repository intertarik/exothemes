# MailChimp

The pack includes pre-built MailChimp templates, which you can import and customise in their email editor.

Because it offers over 40 modules to choose from, The Pack Email does not contain an all-in-one template for MailChimp, as this would be impossible to use due to the technical limitations of their email editor.

## Structure

The MailChimp-integrated files can be found in the ``Files/mailchimp`` folder from your download.

It has the same structure as the Files/html folder, only that all files inside it are ready to use with MailChimp. 

Only the pre-built template ``.zip`` files from the ``Files/mailchimp/templates`` folder can be uploaded directly to MailChimp in order to be used in a campaign. All others are just for creating a MailChimp-compatible template yourself, which you then upload to their service.

If you're planning on creating a MailChimp template yourself, please first take a look at their documentation ( [here](https://mailchimp.com/fr/help/import-a-custom-html-template/) ) on importing a custom template, and then at our own templates to understand how to do it.

## Uploading

Inside the ``Files/mailchimp/templates/`` folder, you'll find .zip files for pre-built templates that you can upload to MailChimp.

1. In MailChimp, go to Templates → Create Template → Code your own.
2. Choose the "Import zip" option, name your template, and select one of the templates from the location mentioned above.

::: warning
Once the import is finished, you will be redirected to the Template edit screen, which shows a preview of your imported template. Do not try to use the "Design" view here, as this is not the place where you customise your email layout for your campaign. Instead, just click "Save & Exit" on the bottom right of the screen.
:::

## Customisation
The templates have many customisation options available through MailChimp's interface, organised by section.

These settings include:

- page background colour
- responsive font settings
- customising buttons background and text colour
- setting the background images and colours of sections

#### Image Editing

When you replace an image through MailChimp's email editor, it does some nasty things to the underlying HTML. These can make images look bad on mobile, and even blow up retina images in Outlook.

To avoid this, make sure that no matter the dimensions of the image you use (retina or not), you always:

- uncheck "Keep proportions". Otherwise MailChimp adds inline height CSS that affects image rendering;
- clear out the value from the "Height" field;
- finally, have the "Width" set to the original dummy image width. The Email for MailChimp uses non-retina dummy images exactly for the purpose of guiding you through this process.

![Mailchimpimages](./edit-image.jpg)

#### Header & Footer Logo

The Email Teamplate Email uses the ``*|BRAND:LOGO|* `` MailChimp MERGE tag to output your company's logo in the Header and Footer sections, so don't worry if you don't see a defaut logo when editing a template.

You'll need to set your default logo, so please see MailChimp's tutorial ([here](https://mailchimp.com/fr/help/set-a-default-logo/)).

This only changes the image's ``src=""`` attribute, but the image itself is still editable. So in case you don't want to use this feature, simply click to edit the image and replace it with your own.

## Limitations & Other Notes

Most visual email builders are limited in functionality, meaning they do not or cannot allow fine-tuned control over the template as if you were to manually edit the HTML code. This is especially relevant to MailChimp's outdated third-party template editor, so please take the following into account.

#### Conflicting Browser Plugins

The Grammarly browser plugin severely affects online email editors, including MailChimp. By injecting itself into the page, it corrupts email HTML, resulting in a broken template.

:::warning
Please disable any plugins such as Grammarly or AdBlock when using an online email builder. As a rule of thumb, we recommend disabling any plugins that manipulate content on a web page when using any of the integrations provided with our email templates.
:::

#### Hamburger Menu Icon

The hamburger menu icon is visible only on the mobile breakpoint, so it can't be edited with MailChimp's visual editor. Instead, you need to edit it manually in the HTML:

```html
<!--[if !mso 9]><!-->
    <img src="https://gallery.mailchimp.com/[...].jpg" class="toggle-trigger show-sm p-sm-8" aria-hidden="true" width="20" style="display: none; max-height: 0;">
<!--<![endif]-->
<div class="toggle-content">
```

#### Background Images

MailChimp's editor is unfortunately very limited when it comes to background images, at the moment.

You can set a module's background image in the "Design" tab, by replacing the default dummy image. Other settings such as background size, position, tiling (repeat), and colour are available:

![setBg](./set-background-image.jpg)

The downside of this is that it only works by us having to pre-define embedded CSS in the template's ``<style>`` tag. This means that email clients that don't support embedded CSS and CSS background images, will not show the image.

#### Outlook Background Images

Same as with the above, MailChimp does not fill in the URL for the image in the ``<v:image src="..." />`` from the VML code. You also need to do this manually, by editing the template HTML code.

::: danger
Setting a background image just with MailChimp's visual editor does not update this code. Outlook will not show the correct image unless you manually edit the HTML.
:::

Tip: use the StampReady integration we provide, to build your layouts in StampReady's modern builder and then export to use in MailChimp. StampReady's editor properly updates background images.

#### Code Bloat

Unfortunately, MailChimp's editor currently duplicates the @media CSS query, for every declaration in part.

Consider the following CSS from our template:

```css
@media  only screen and (max-width: 600px) {
    u ~ div .wrapper {min-width: 100vw;}
    .container {width: 100%!important; -webkit-text-size-adjust: 100%;}
}
```

MailChimp will transform that into:



```css
@media  only screen and (max-width: 600px) {
    u ~ div .wrapper {min-width: 100vw;}
}

@media  only screen and (max-width: 600px) {
    .container {width: 100%!important; -webkit-text-size-adjust: 100%;}
}
```

This increases the message size considerably, and can potentially lead to message clipping in Gmail. Increased CSS size can also lead to Gmail not taking the CSS into consideration at all. While we did test and found that Gmail's limit is usually not reached with our templates, always send yourself a test email to check.

Note: the more modules you add to your template, the higher the risk of Gmail clipping your email becomes.


##### Slow/buggy interface

Please note that the MailChimp editor can be slow at times. This is a limitation of their template builder, and unfortunately there's currently no way to overcome it.

##### Scrolling issues

MailChimp's builder has a bug that sometimes disables scrolling when you add a new section. We've seen that adding another section, or saving and refreshing, usually takes care of it.

##### What happened to my content?

MailChimp has a 'feature' called Recovered Content, that tries to be smart and match content from previous campaigns into your layout. Although well intended, this is frustrating when you add a new section and see its layout/formatting broken, because an image was completely replaced with some text, for example (check the video tutorial, it happened to us too).

What usually works is removing and then re-adding the section that got corrupted by this recovered content functionality. Sometimes, you might even need to save and refresh the page.

##### Preview looks weird

MailChimp's application styling sometimes overrides our template's styles. This is clearly visible in the visual editor, but can sometimes be seen even when using their preview tool.

Always send yourself an actual test email from MailChimp's preview tool, and check it in a real email client.

##### Automations Product Recommendations

As much as we wanted to, unfortunately MailChimp doesn't allow selecting a custom template for Order Notifications. Therefore, the pack does not use the ``*|PRODUCT_RECOMMENDATION:[$total=X]|*`` MERGE tag.

:::tip
As always, test before you send!
:::