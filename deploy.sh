docker stop birdyprism
echo "container stopped"
docker rm birdyprism
echo "container removed"
docker rmi birdyprism
echo "image removed"
sudo git pull
echo "files pulled"
docker build -t birdyprism .
echo "image built"
docker run -itd -p 7669:3000 --name birdyprism birdyprism
echo "container running"