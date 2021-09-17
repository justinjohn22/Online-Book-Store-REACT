# dockerfile sept team 2
FROM node:15.13-alpine

ENTRYPOINT [ "echo" ]

WORKDIR /SEPT-BOOKEROO-TEAM-2/FrontEnd

RUN npm install

COPY . .

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]