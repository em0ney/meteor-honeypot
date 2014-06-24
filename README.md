## Overview 

This is a meteorite package to provide a honeypot captcha to be used to protect your forms from spambots.

Contact forms and other forms on unauthenticated pages can be exploited by spambots to repeatedly generate form submissions.

A honeypot captcha is a field on the form that is hidden via CSS.  When the form is submitted with the honeypot field populated, the form submission can be discarded.

## Installation

Install by typing `mrt add honeypot`

## Usage

#### Include Honeypot Fields
Within your form, to include the honeypot fields, reference the honeypot template:

    {{> honeypot }}

#### Check and Remove Honeypot Fields

When dealing with a form submission, pass the form element or the whole template into the honeypot ishuman function:

    if (Honeypot.isHuman(form)) {
      Honeypot.removeHoneypotFields(form);
      // Process form
    } else {
      // Spambot submission
    }
    
