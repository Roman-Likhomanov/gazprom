
SELECT groups_nodes.node_id, groups.caption as 'group_name', nodes.caption as 'node_name',
interfaces.caption as 'interface_name', applications.caption as 'application_name',
users.firstname as 'admin_firstname', users.lastname as 'admin_lastname', users.email as 'admin_email',
s1.color as 'node_status_color', s1.description as 'node_status_description',
s2.color as 'interface_status_color', s2.description as 'interface_status_description'

FROM groups
LEFT JOIN groups_nodes on groups_nodes.group_id=groups.id
LEFT JOIN nodes on nodes.id=groups_nodes.node_id
LEFT JOIN interfaces on interfaces.id=nodes.interface
LEFT JOIN nodes_applications on nodes_applications.node_id=nodes.id
LEFT JOIN applications on applications.id=nodes_applications.application_id
LEFT JOIN users on users.id=nodes.admin
LEFT JOIN statuses s1 on s1.id=nodes.status
LEFT JOIN statuses s2 on s2.id=interfaces.status




