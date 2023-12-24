import type { Service } from "../Service";

export const services: Service[] = [
  {
    serviceName: "Acrylics",
    servicePrice: ["$38 Up", "$28 Up", "$15"],
    serviceSpecification: ["Full Set", "Fills", "Take-Off Only"]
  },
  {
    serviceName: "Manicures",
    servicePrice: ["$15", "$8", "$8", "$25", "$35 Up"],
    serviceSpecification: ["Standard", "French", "American", "Gel (OPI)*", "DIP Powder*"]
  },
  {
    serviceName: "Pedicures",
    servicePrice: ["$25", "$43"],
    serviceSpecification: ["Standard", "Spa"]
  },
  {
    serviceName: "Pink & White",
    servicePrice: ["$55 Up", "$38 Up"],
    serviceSpecification: ["Full Set", "Pink Fills"]
  },
  {
    serviceName: "Additional Services",
    servicePrice: ["$4", "$8", "$10"],
    serviceSpecification: ["Nail Repair", "Polish Change (hands)", "Polish Change (feet)"]
  }
];