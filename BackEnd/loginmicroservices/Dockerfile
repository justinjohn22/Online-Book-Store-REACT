FROM maven:3.5.4-jdk-8-alpine as maven

COPY ./pom.xml ./pom.xml

COPY ./src ./src

RUN mvn package

FROM openjdk:8u171-jre-alpine

WORKDIR /bookeroo

COPY --from=maven target/loginmicroservices-*.jar ./loginmicroservices.jar

CMD ["java", "-jar", "./loginmicroservices.jar"]
