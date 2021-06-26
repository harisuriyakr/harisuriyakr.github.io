$fields = array('pkey', 'name', 'occupation');
$result = $conn->query($sql);
$row_data = array();
while ($row = $result->fetch_assoc()) {
    $row_data[] = $row;
}
$rowfields = array('cols' => $fields, 'rows' => $row_data);
$json_data = json_encode($rowfields);
echo $json_data;