# -*- coding: utf-8 -*-
import time
import os
import sys

sys.path.insert(0, os.sep.join(os.path.abspath(__file__).split(os.sep)[:-2]))

from fabric.api import local, abort, run, env, sudo, put
from fabric.contrib.files import exists
from fabric.colors import red
from fabric.context_managers import prefix

# from dockerfabric import tasks as docker


# env.project_name = 'lsi'
# env.hosts = ['162.243.186.82']
# env.user = 'lsi'
# env.password = 'lsiadmin'

# env.date = time.strftime('%Y%m%d%H%M%S')
# os.environ['DJANGO_SETTINGS_MODULE'] = '%(project_name)s.settings' % env

# # se comenta ya que fabrib no es compatible con python 3.4
# env.db_name = 'lsi_db'
# env.db_user = 'lsi_admin'
# env.db_password = 'lsi_admin'
# env.db_host = 'localhost'
# env.db_port = ''
# env.remote_backup_file_name = '/tmp/%(db_name)s-backup-%(date)s.backup' % env
# env.remote_backup_file_name_dump = '/tmp/%(db_name)s-backup-%(date)s.dump' % env
# env.local_backup_file_name = '%(db_name)s-backup-%(date)s.backup' % env
# env.local_backup_file_name_dump = '%(db_name)s-backup-%(date)s.dump' % env
# env.docker_name_container_db ="lsidb"
# env.docker_host = "localhost"

def server():
    local('docker-compose -f ./docker/run.yml run --rm --service-ports nodeserver bash')

def gulp():
    local('docker-compose -f ./docker/run.yml run --rm --service-ports gulp bash')


def update_local_media():
    # se copia las imagenes de media que son las que guarda en la db el cms
    command_copy_media = 'scp -r lsi@162.243.186.82:/home/lsi/lsi/media .'
    local(command_copy_media)
