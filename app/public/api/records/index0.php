<?php

'SELECT * FROM Patient WHERE patientGuid = ?';

'SELECT * FROM Patient WHERE patientGuid = "' . $id .'""';

//SQL Injection
$id = " ' Delete From Patient;"
