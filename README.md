# orfsc

## Setup Instructions ##

### Project Requirements: ###
1. [Composer](https://getcomposer.org/download/)
2. [Laravel](https://laravel.com/docs/5.6/installation)  
3. [Docker](https://docs.docker.com/docker-for-mac/install/) 

### Procedure ###
1. Clone the Repository
2. Launch Terminal/CMD
3. `cd` into project directory (ie: $User:orfsc)
4. Enter `composer install`
5. Enter `docker build -t orfsc .`
6. Enter `docker run -p 80:80 orfsc`
   1. If conflicts appear due to port usage, feel free to switch port number as such (ie: run -p 160:80)
7. The web page will be available to access via **http://localhost**
8. After you've finished exploring the web page, terminate the connection by entering `cmd/control + C`
    
### TroubleShooting ###   
In the off chance you run into an error that reads "Whoops, looks like something went wrong." Terminate the connection and Enter the following commands:

`composer self-update` 

`composer update`
