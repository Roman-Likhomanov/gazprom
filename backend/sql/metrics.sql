SELECT metrics.id, nodes.caption as 'node_name', metrics.datetime, metrics.cpu_utilization, memory_utilization, disk_utilization

FROM metrics
LEFT JOIN nodes on nodes.id=metrics.node_id
