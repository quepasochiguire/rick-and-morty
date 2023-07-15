### CONFIGURACIÒN DE BD MONGO

1. Se agrego el mongo en un contenedor para la configuraciòn rapida del proyecto, los comandos a ejecutar son los siguientes desde la raiz del proyecto: 

cd mongo
docker-compose up -d
docker-compose exec configsvr01 sh -c "mongosh < /scripts/init-configserver.js"
docker-compose exec shard01-a sh -c "mongosh < /scripts/init-shard01.js"
docker-compose exec shard02-a sh -c "mongosh < /scripts/init-shard02.js"
docker-compose exec shard03-a sh -c "mongosh < /scripts/init-shard03.js"

docker-compose exec router01 sh -c "mongosh < /scripts/init-router.js"
docker-compose exec router01 mongosh --port 27017
sh.enableSharding("rickandmorty")

### INSTALACION DE PROYECTO

1. Desde la raiz del proyecto ejecutar lo siguiente: 

 yarn install
 yarn start:dev

 ### SE PROVEERA UNA COLECCIÒN DE POSTMAN PARA PROBAR LOS DIVERSOS CASOS DE USO




