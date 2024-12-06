import Image from "next/image";
import React from "react";
import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Mail, Loader2 } from "lucide-react"
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button";

export default function Home() {
  // const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="md:container md:mx-auto">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <div className="table">
          <Table>
            <TableCaption>TABLE DEMO</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Nguyen Than Hoa</TableCell>
                <TableCell className="icon-action flex items-center justify-center">
                  <div className="view"><Button variant="outline">View</Button></div>
                  <div className="edit"><Button variant="outline">Edit</Button></div>
                  <div className="delete"><Button variant="destructive">Delete</Button></div>
                  <div className="email"><Button><Mail /> Login with Email</Button></div>
                  <div className="loading"><Button disabled><Loader2 className="animate-spin" />Please wait</Button></div>
                  <div className="link"><Button asChild><Link href="#">Login</Link></Button></div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>

  );
}
