FROM nginx
COPY index.html /usr/share/nginx/html/index.html
COPY containers.html /usr/share/nginx/html/containers.html
COPY newPage.html /usr/share/nginx/html/newPage.html
COPY css/styles.css /usr/share/nginx/html/css/styles.css
COPY js/script.js /usr/share/nginx/html/js/script.js
EXPOSE 80