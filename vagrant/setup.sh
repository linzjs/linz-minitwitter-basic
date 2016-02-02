#!/usr/bin/env bash

if [ ! -e /etc/vagrant/setup ]
then

	echo ">>> setting up virtual machine"

	# alias the docker-clean-containers script
	if [ ! -e /usr/local/bin/docker-clean-containers ]; then
		ln -s /vagrant/vagrant/scripts/docker-clean-containers /usr/local/bin/docker-clean-containers
	fi

	if [ ! -e /usr/local/bin/docker-clean-images ]; then
		ln -s /vagrant/vagrant/scripts/docker-clean-images /usr/local/bin/docker-clean-images
	fi

	# link the Linz development folder
	cd /vagrant/app && npm install && npm link linz

	echo ">>> virtual machine has been setup and is ready to go'"

	touch /etc/vagrant/setup

else

	echo ">>> virtual machine has already been setup"

fi
