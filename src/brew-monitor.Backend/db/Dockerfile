FROM mysql:latest as builder

RUN ["sed", "-i", "s/exec \"$@\"/echo \"not running $@\"/", "/usr/local/bin/docker-entrypoint.sh"]
ENV MYSQL_USER=gormerik
ENV MYSQL_PASSWORD=Cyberpunk2077!
ENV MYSQL_ROOT_PASSWORD=Cyberpunk2077!
ENV MYSQL_DATABASE=brew_monitor

WORKDIR /app
COPY brew-monitor_db.sql /docker-entrypoint-initdb.d/

RUN ["/usr/local/bin/docker-entrypoint.sh", "mysqld", "--datadir", "/initialized-db"]


FROM mysql:latest

COPY --from=builder /initialized-db /var/lib/mysql
