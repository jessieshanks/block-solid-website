
This app is the web home of the Block-Solid app idea. 
https://block-solid-website.herokuapp.com 

The website was built using node.js, Express, mongoose, mongodb, JavaScript, and jQuery.

Mongodb is used to add operational value to the website. 
Information is stored in 3 prelinimary collections:
- the team behind Block-Solid
- data from the contact forms submitted
- email mailing list

Several CRUD operations are currently operational.
- data is pulled from the teammembers collection to populate the team view
- data is posted from the contact form using ajax and
    - saved to the contactforms collection
    - emailed to the Block-Solid team using a SendGrid API
    - any new email addresses are saved to the email list emaillists collection 

Two of the views are currently responsive.

The primary tasks remaining are to make the app completely responsive, to complete the views that are still is skeleton phase, and to add more substantive content. 


