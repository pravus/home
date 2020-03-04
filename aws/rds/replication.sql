call mysql.rds_set_external_master ('host/ip', 3306, 'username', 'password', 'mysql-bin-changelog.000000', 12345, 0);
call mysql.rds_start_replication;
call mysql.rds_stop_replication;
call mysql.rds_reset_external_master;
