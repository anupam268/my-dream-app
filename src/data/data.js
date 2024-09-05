// src/data/data.js
export const incidents = [
  // Week 35 (Friday 30th August – Thursday 5th September 2024)
  {
    id: "24070284",
    title: "[PLATFORM][OCS] Openstack provisioning degraded",
    impactedXaas: "OCS",
    impactedAZ: "PARIS 2",
    unityIncidents: "579314614",
    priority: "P1",  // Added priority
    date: "30 August, 2024",
    time: "8:30 AM",
    contact: "Sujan",
    description: "There was a scheduled change 573356305 in Paris to implement the RabbitMQ heartbeat frame recommendations.",
    rootCause: "Due to a bug in Kube registry 'image master' doesn’t take the last commit.",
    solution: "This was caught during smoketest. Issue was corrected by re-execution of the change.",
    actions: "IBM opens ticket. Specific tag must be created.",
    teamInCharge: "OCS",
    openDate: "2024-08-30",
    closeDate: "2024-08-30"
  },
  {
    id: "24070285",
    title: "[NETWORK][DCS] Network latency increased",
    impactedXaas: "DCS",
    impactedAZ: "NY 1",
    unityIncidents: "679413245",
    priority: "P2",  // Added priority
    date: "2 September, 2024",
    time: "10:45 AM",
    contact: "Priya",
    description: "High network latency was detected in NY datacenter.",
    rootCause: "Routing loop in the core switches caused high latency.",
    solution: "Reconfiguration of the core switches resolved the issue.",
    actions: "Network reconfiguration. Monitoring enabled.",
    teamInCharge: "DCS Team",
    openDate: "2024-09-02",
    closeDate: "2024-09-02"
  },
  {
    id: "24070286",
    title: "[STORAGE][SAN] SAN storage performance degraded",
    impactedXaas: "SAN",
    impactedAZ: "LONDON 1",
    unityIncidents: "779514734",
    priority: "P1",  // Added priority
    date: "4 September, 2024",
    time: "2:00 PM",
    contact: "Rahul",
    description: "SAN storage performance was degraded due to excessive read/write requests.",
    rootCause: "A batch job generated a large number of I/O operations, degrading storage performance.",
    solution: "Batch job was rescheduled to off-peak hours.",
    actions: "Batch job rescheduling and SAN monitoring enabled.",
    teamInCharge: "Storage Team",
    openDate: "2024-09-04",
    closeDate: "2024-09-04"
  },

  // Week 34 (Friday 23rd August – Thursday 29th August 2024)
  {
    id: "24070287",
    title: "[SECURITY][IDS] Intrusion detection system alert",
    impactedXaas: "IDS",
    impactedAZ: "LONDON 1",
    unityIncidents: "899514734",
    priority: "P1",  // Added priority
    date: "24 August, 2024",
    time: "3:30 PM",
    contact: "John",
    description: "Suspicious traffic detected in the IDS system.",
    rootCause: "False positive caused by a misconfiguration in the IDS rule set.",
    solution: "The rule set was updated to avoid the false positives.",
    actions: "IDS reconfiguration and continued monitoring.",
    teamInCharge: "Security Team",
    openDate: "2024-08-24",
    closeDate: "2024-08-24"
  },
  {
    id: "24070288",
    title: "[COMPUTE][VM] Virtual machine boot failure",
    impactedXaas: "VM",
    impactedAZ: "PARIS 3",
    unityIncidents: "479514734",
    priority: "P2",  // Added priority
    date: "25 August, 2024",
    time: "12:00 PM",
    contact: "Sophie",
    description: "A virtual machine failed to boot after scheduled maintenance.",
    rootCause: "A configuration error in the boot loader caused the failure.",
    solution: "The boot loader was reconfigured and the VM was successfully restarted.",
    actions: "Reconfiguration of VM boot settings.",
    teamInCharge: "Compute Team",
    openDate: "2024-08-25",
    closeDate: "2024-08-25"
  },
  {
    id: "24070289",
    title: "[NETWORK][DCS] Data loss detected in network transmission",
    impactedXaas: "DCS",
    impactedAZ: "NY 2",
    unityIncidents: "889514734",
    priority: "P1",  // Added priority
    date: "26 August, 2024",
    time: "9:30 AM",
    contact: "Arjun",
    description: "A network transmission error resulted in data loss between data centers.",
    rootCause: "Packet loss due to misconfigured firewall rules.",
    solution: "Firewall rules were updated and data retransmission was successful.",
    actions: "Firewall reconfiguration and retransmission.",
    teamInCharge: "Network Team",
    openDate: "2024-08-26",
    closeDate: "2024-08-26"
  },
  {
    id: "24070290",
    title: "[DATABASE][SQL] SQL query performance degradation",
    impactedXaas: "SQL",
    impactedAZ: "LONDON 2",
    unityIncidents: "909514734",
    priority: "P2",  // Added priority
    date: "27 August, 2024",
    time: "3:00 PM",
    contact: "Emily",
    description: "SQL queries were taking longer than expected to execute.",
    rootCause: "An inefficient query plan was generated due to outdated statistics.",
    solution: "The statistics were updated and query performance improved.",
    actions: "Update statistics, rerun queries.",
    teamInCharge: "Database Team",
    openDate: "2024-08-27",
    closeDate: "2024-08-27"
  },
  {
    id: "24070291",
    title: "[STORAGE][SAN] SAN performance issue detected",
    impactedXaas: "SAN",
    impactedAZ: "LONDON 3",
    unityIncidents: "559514734",
    priority: "P0",  // Added priority (example P0 incident)
    date: "29 August, 2024",
    time: "1:30 PM",
    contact: "Raj",
    description: "SAN storage performance was degraded due to high I/O operations.",
    rootCause: "Heavy I/O workload from multiple virtual machines.",
    solution: "Workload balancing resolved the issue.",
    actions: "SAN workload balancing.",
    teamInCharge: "Storage Team",
    openDate: "2024-08-29",
    closeDate: "2024-08-29"
  },

  // Week 33 (Friday 16th August – Thursday 22nd August 2024)
  {
    id: "24070292",
    title: "[COMPUTE][VM] VM migration failure",
    impactedXaas: "VM",
    impactedAZ: "NY 3",
    unityIncidents: "659514734",
    priority: "P1",  // Added priority
    date: "16 August, 2024",
    time: "5:00 PM",
    contact: "Nina",
    description: "A virtual machine migration failed during planned maintenance.",
    rootCause: "A network issue caused the migration to time out.",
    solution: "Network configuration was updated and the migration was retried successfully.",
    actions: "Network reconfiguration, retry migration.",
    teamInCharge: "Compute Team",
    openDate: "2024-08-16",
    closeDate: "2024-08-16"
  },
  {
    id: "24070293",
    title: "[SECURITY][IDS] IDS false positives",
    impactedXaas: "IDS",
    impactedAZ: "NY 2",
    unityIncidents: "759514734",
    priority: "P2",  // Added priority
    date: "18 August, 2024",
    time: "4:00 PM",
    contact: "Mohan",
    description: "The IDS detected several false positives due to a misconfigured rule.",
    rootCause: "A misconfigured rule in the IDS triggered false positives.",
    solution: "The rule was updated and false positives were eliminated.",
    actions: "Rule reconfiguration in IDS.",
    teamInCharge: "Security Team",
    openDate: "2024-08-18",
    closeDate: "2024-08-18"
  },
  {
    id: "24070294",
    title: "[DATABASE][SQL] SQL replication lag detected",
    impactedXaas: "SQL",
    impactedAZ: "NY 1",
    unityIncidents: "959514734",
    priority: "P1",  // Added priority
    date: "20 August, 2024",
    time: "8:00 AM",
    contact: "Ashish",
    description: "SQL replication lag was detected between primary and secondary databases.",
    rootCause: "Heavy write operations on the primary database caused the replication lag.",
    solution: "The write operations were rescheduled to off-peak hours.",
    actions: "Reschedule write operations, monitor replication.",
    teamInCharge: "Database Team",
    openDate: "2024-08-20",
    closeDate: "2024-08-20"
  },
  {
    id: "24070295",
    title: "[STORAGE][SAN] SAN storage error detected",
    impactedXaas: "SAN",
    impactedAZ: "LONDON 4",
    unityIncidents: "659514734",
    priority: "P2",  // Added priority
    date: "21 August, 2024",
    time: "1:00 PM",
    contact: "Sandeep",
    description: "A SAN storage error was detected during routine checks.",
    rootCause: "A hardware error was identified in one of the SAN disks.",
    solution: "The disk was replaced and the issue was resolved.",
    actions: "Replace faulty disk.",
    teamInCharge: "Storage Team",
    openDate: "2024-08-21",
    closeDate: "2024-08-21"
  }
];
