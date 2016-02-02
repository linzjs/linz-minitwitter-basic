#!/usr/bin/env bash

if [ ! -e /etc/vagrant/apt-get ]
then

	echo ">>> setting up apt-get"

	# Required for add-apt-repository
	apt-get install -y software-properties-common build-essential

	# Required for mongodb
	apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
	echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list

	# Required for latest git
	add-apt-repository ppa:git-core/ppa

	# update apt-get
	apt-get update

	# only run once
	touch /etc/vagrant/apt-get

else

	echo ">>> apt-get is already setup..."

fi
