#!/usr/bin/env bash

if [ ! -e /etc/vagrant/mongo ]
then

	echo ">>> setting up mongo shell and tools"

	# install mongo
	apt-get install -y mongodb-org

	# setup a place for our data to live (MongoDB)
	# groupadd -r mongodb
	# useradd -r -g mongodb mongodb
	mkdir -p /data/mongodb
	chown -R mongodb:mongodb /data/mongodb

	# only run once
	touch /etc/vagrant/mongo

else

	echo ">>> mongo shell and tools is already setup"

fi
