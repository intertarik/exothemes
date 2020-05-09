# Mailster

## Mailster Integration
This Email is integrated with the Mailster WordPress Plugin, which you can use to send email campaigns directly from your WordPress-powered site using services such as SendGrid, Mailgun, SparkPost, or Amazon SES.

## Structure

The Mailster-integrated files can be found in the Files/mailster folder from your download.

This folder has the same structure as the Files/html folder, only that all files inside it are editable or ready to use with Mailster:

- ``/all-in-one`` - all-in-one template .zip file

Only the all-in-one template .zip file from the ``Files/mailster/all-in-one`` folder can be imported in Mailster. All others are just for creating a Mailster-compatible template yourself.

If you're planning on creating a Mailster template yourself, please first take a look at their documentation([here](https://docs.revaxarts.com/mailstertemplates/)), and then at our own templates to understand how to do it.

## Uploading to WordPress

Inside the ``Files/mailster/all-in-one/`` folder, you'll find the .zip file.

This file is what you need to upload under ``Newsletter → Templates``, in WordPress. It the Base and Notification all-in-one templates, which you can use to quickly create layouts just like in our demos.

:::tip
Our Mailster integration comes with automatic download via Envato. Once you've purchased the product, you can simply go to Mailster → Templates → More Templates, and click the Download button for the product. This feature requires that you are logged in on Envato with the account that you used to purchase our product.
:::

## Supported Tags

The following Mailster tags and variables are supported in Sartre Email:

#### General Functionality

- Support for the "Auto" feature (magic wand)
- Background image support - just click a background image to change it

#### Template Tags & Classes

- ``<module>``
- ``<single>``
- ``<multi>``
- ``textbutton`` (class for table-based HTML buttons)

#### Personalization Variables
- ``{webversionlink}``
- ``{unsublink}``
- ``{notification}``
- ``{copyright}``
- ``{can-spam}``

Mailster supports many more variables, which are too specific to each WordPress installation for us to include in our email template. Learn more about using variables in Mailster campaigns ([here→](https://kb.mailster.co/tags-in-mailster/))

## Customisation

Mailster offers a solid and easy-to-use email builder, accessible right from your WordPress dashboard. Text and images can be customised in a way similar to how you edit your posts and pages, and sections can be ordered with drag and drop.

For advanced users, it also offers the possibility to edit the HTML source code of each section.

#### Background Images

To edit the background image of a section in Mailster, simply click it and you will be presented with the image library modal, where you can choose what image to use.

Mailster will update the image path in all places required, so that background images will render as intended.

## Limitations & Other Notes

Although Mailster's builder is quite flexible and works well, it still has a few drawbacks, at least for now.

Conflicting Browser Plugins
The Grammarly browser plugin severely affects online email editors, including MailChimp. By injecting itself into the page, it corrupts email HTML, resulting in a broken template.

:::warning
Please disable any plugins such as Grammarly or AdBlock when using an online email builder. As a rule of thumb, we recommend disabling any plugins that manipulate content on a web page when using any of the integrations provided with our email templates.
:::

#### Auto content feature

Please keep in mind that this Mailster feature is still in its early stages. It currently cannot correctly fill in multi-column layouts (you can see this with the default Mailster template, too). Until further notice, use it only with single column sections.

:::tip
As always, test before you send!
:::