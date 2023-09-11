---
# Page Meta

## Basic 
Title: Contact Us
Description: Unlock Your Online Security Potential with PasswordUtils.com: Strong Passwords Made Simple.
Robots: index,follow
Template: single-page

## Menus 
Navbar: true
Navbar_Order: 4

## Schema 
Page_Type: ContactPage

## Content 
H1: Contact Us
Sub_Text: Connecting With Us — Where Your Voice Matters!
Notice: Contact PasswordUtils.com for any inquiries, feedback, or assistance regarding our powerful password tools. Our dedicated team is here to provide prompt support and help ensure your online security and peace of mind. Reach out to us today and take control of your password protection journey.

## Footer 
CSS: form
---

<!-- Page Content -->

<article>
    <form id="contact-form">
        <p>
            <label for="name">First name</label>
            <input id="name" type="text" name="first-name">
        </p>
        <p>
            <label for="subject">Subject</label>
            <input id="subject" type="text" name="subject">
        </p>
        <p>
            <label for="email">Email</label>
            <input id="email" type="email" name="email" required="">
        </p>
        <p>
            <label for="message">Message</label>
            <textarea id="message" rows="6"></textarea>
        </p>
        <p>
            <label>
                <input type="checkbox" id="checkbox" value="terms">
                I have read and agree to the <a href="#">Privacy Policy</a> of this website.
            </label>
        </p>
        <button type="submit">Send</button>
    </form>
</article>
