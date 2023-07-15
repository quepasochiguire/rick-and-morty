cd mongo
docker-compose up -d
docker-compose exec configsvr01 sh -c "mongosh < /mongo/scripts/init-configserver.js"
docker-compose exec shard01-a sh -c "mongosh < /mongo/scripts/init-shard01.js"
docker-compose exec shard02-a sh -c "mongosh < /mongo/scripts/init-shard02.js"
docker-compose exec shard03-a sh -c "mongosh < /mongo/scripts/init-shard03.js"