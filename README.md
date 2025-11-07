**Describe how you would host the API on EC2 and store product images on S3**
**Hosting API on EC2**
- Create account to aws amazon
- Login to console
- Create new instance by selecting AMI and keypair 
- create instance
- with once done go to connect option of the instace
- using ssh terminal connect to server using cmd which is already available there or use public ip 
- Install required server like nodejs
- Transfer your files there and run the code on specific port 
- or we can create docker build and push it our profile 
- install docker on server and use run command to pull the docker image from our account

**Storing Product Images on S3**
- I have not working directly on this. I used to work on sharepoint side for this kind stuff.
- But for a referance they must have some config and exposing their format to connect and upload the images.

**Project Management & Documentation 
Tech Stack **
Frontend - React 
- fast opreting single page application with available use rich libraries
- RTK makes it easy to handle states between components
- create small components and reuse it as much as possible
- Multiple memory save options like lazy loading, memoization tech available

Node.js
- Allows to use JS as both places which makes tasks more easy
- Start with very small set up, with rich support in available libraries for security 
- Async behaviour makes it easy to manage multiple actions
- Non blocking input output
- Libvu multithread architecture helps node from inside for handle multiple actions using CPI cores 

PostgreSQL
- In future relational management is easy with RDBMS
- Fast and easy to set up
- Multi data type support and can query JSON columns too

**Project Plan - Ecommerce Products**
**Phase one - Requirement gathering**
- Like its ecommerce site
- We will be storing product on add action
- On list view we will be showing products
- We need to save 4-5 attributes of the products
- which are string/numeric fields
- which fields will be mandetory
- will be showing multi card view or list view for products

**Phase two - Frontend Design**
- Designing list view 
- Where to show heading and buttong for add product
- Are we using modal pop up for add new product
- Are we considering filters and pagination given the timeline
- Details UI designing or basic

**Phase three - Frontend tech finalizing**
- React or something else! - React
- Ag-grid or React table for table/list view - ag-grid install n use
- RTK or plane redux or context api or manage only props - As the API calls are also handeled by RTK 

**Phase four - Designing backend **
- There will be two http methods and one end point /products
- MVC sstructure for handling the data
- Use mock data at model level 
- Setting up server easy and adding basic checklike JSON parsing 

**Phase Five - Writing backend**
- Writing backend code with server set up and routes, controller and models
- Running up server and checking with postman if written API's are working or not
- Desing & Integrate Database wiht postgreSQL

**Phase Six - Writing frontend**
- Use available libraries for loading components first
- Replacing mock data with RTK and backend API's 

**Phase seven - Intgrating FE & BE**
- Using cor's extension try to make requests to backend 
- Try exporting build to public repo or backend directly access static website from backend only
- Build Integration
- Removing backend DB and adding mock

**Phase eight- learn how EC2 work and upload site**
- Learning ssh isntallation and how it works
- Create image in docker push to private profile
- Create EC2 Instace and install docker there
- Run Docker, Login and run the uploaded docker image directly from EC2


Architecture Overview – Simple diagram or explanation of front-end, back-end, and AWS components.
<img width="1154" height="577" alt="Screenshot 2025-11-07 174310" src="https://github.com/user-attachments/assets/9a70123f-a7f5-4c14-aa70-c02b3603b505" />

**Task Breakdown – If you had a team of 3 developers, how would you divide tasks and timeline?**
Overall I will ask them to devide the work and check for technical analysis and once done by deviding the big story in small story and tasks will assign to all of them. 
- I will be deviding work between three of them in smaller chunks
- Task Deviding in Three parts - setup, small parts creating and integrating them together
 Set up - 1 day
   person1 - React side set up with RTK and Reach router set up
   person2 - Node.js set up with cors and installing express and integrating them together
   person3 - Datbase table creating and creating mock data from FE 

 Small parts creating - 1 day
   Person1 - FE list view with mock data with RTK integration
   Person2 - Form view with RTK integration
   Person3 - Porducts API for get and post without the db integration

Integation - 0.5 day
    Person1 - integrate form and list view and check if items are updating simulteniouly
    Person2 - Integrate FE and BE API's 
    Person3 - Integrate BE and DB

Testing - 0.5
    Person1,2,3 - Bug-bash and Test integrated components and things 

**Deployment Plan – How you’d deploy and maintain this on AWS.**
- creating Docket build and runing on EC2 server

**Future Enhancements – What you’d improve if given more time**
Frontend -
- Interactive UI for both the pages
- Filters, pagination, serching, validations, 
- Aligned form view, loders, breadcrumbs, menu, user authentication with OAuth2.0

Bakcend -
- More validations
- adding basic security practices using helmet.js
- more opreations like delete, edit
- Adding category as seprate table 
- Adding stock_numbers, product images
