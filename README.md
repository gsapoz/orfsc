# orfsc

## Setup Instructions ##

### Project Requirements: ###
1. [Composer](https://getcomposer.org/download/)
2. [Laravel](https://laravel.com/docs/5.6/installation)  
3. [Docker](https://docs.docker.com/docker-for-mac/install/) 

### Procedure ###
1. Clone the Repository
2. Launch Terminal/CMD
3. cd into project directory (ie: $User:orfsc)
4. Run **composer install**
5. Run **docker build -t orfsc .**
6. Run **docker run -p 80:80 orfsc** 
   1. If conflicts appear due to port usage, feel free to switch port number as such (ie: run -p 160:80)
7. The web page will be available to access via **http://localhost**
