---
title: Designing links and forms
permalink: /:path/:basename/
tags:
  - Content
---
Help users do what they need to do by writing useful links and instructions.

## Writing link text

Links help users decide where to go next. The link text should show the user where they will go and what they will find there.



Link text should be descriptive and should make sense when read in isolation:

* do not use generic text like ‘click here’ or ‘read more’ – these won’t make sense to someone whose screen reader is reading out a list of links 
* your link should start with a verb if you want the user to do something. For example, ‘check your application’s progress”
* use text that explains what information you are linking to. For example, ‘...there’s a different process for getting certificates in Scotland’



Links should be consistent:

* do not use the same link text to link to different places
* use the same text if you link to the same place more than once on a page
* match the link text to the title of the page you are linking to, if you can

### Designing links for people with dexterity issues

People with motor difficulties or who are using assistive devices may struggle to select links accurately:

* avoid using single-word links
* do not place links too close to each other
* apply spacing around links



Do not put too many links on a page. This can be overwhelming for all users.

### Linking to documents

Do not link directly to a document, image or other attachment. Link to the page that hosts the document. 

## Helping users complete forms

Forms should be easy for users to understand and complete. Developers should build accessible forms, but form layout and content has to be accessible too. Clear instructions help the user fill forms in, fix any errors and submit forms. 

### Structuring forms

Use a logical structure. Start with any questions that decide if the person can use the service. 



Use question and answer logic to direct users so they only have to answer questions that are relevant to their situation.



Split long forms into screens, with one thing per screen. 

### Asking questions on forms

Ask questions in a way that will make sense to the user. Test questions with users and [change the text if users do not know how to answer.](https://www.gov.uk/service-manual/design/designing-good-questions)



Include help text if you need to explain jargon, legal terms or where someone can find the information you’re looking for. 

### Design for everyone

Only ask for information that you need. 



Do not ask for title, gender, race, date of birth or other personal information unless you need to know this. Explain why you need this information and how you will keep it safe. 



Avoid setting parameters on field inputs:

* restricting text input to the Latin alphabet excludes people whose names include accents or non-Latin characters
* setting minimum character requirements excludes people with short first or last names
* limiting options on gender to male or female excludes non-binary genders
* requiring users to complete fields within a certain time can increase stress and anxiety



Do not use captchas that depend on a person’s ability to:

* interpret non-text images
* work with numbers
* use logic or solve puzzles



Use ARIA labels to provide additional instructions to screen readers, especially if you’ve used placeholder text to help users understand how to complete a field. 

### Writing error messages

Users should be able to quickly see and correct errors on a form. 



Use these guidelines:

* use helpful, positive language
* provide a hint or an example to help the user understand how to fix the error
* accept information in different formats. For example, let the user input their national insurance number as jc123456b or JC 12 34 56 B
* do not rely on colour alone to highlight an error – colourblind users may miss this
* do not use technical terms to explain the error



If appropriate, use the [error message component from the GOV.UK Design System](https://design-system.service.gov.uk/components/error-message/)

### Keeping the user informed

Users want to know what happens after they fill in a form. A lack of clarity on the next steps in a process can increase users’ anxiety. 

Your confirmation message should

* let the user know what they said on their form – even if this is confirming that a copy has been sent to the user
* explain what happens next
* explain any time limits or deadlines
* let the user know if they have to do anything else and explain how to do this

**
Get more advice on accessible forms at [Structuring forms: GOV.UK service manual](https://www.gov.uk/service-manual/design/form-structure)**