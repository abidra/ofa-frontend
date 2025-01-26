import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import Logo01 from '@/public/images/logo-01.svg';
import Logo02 from '@/public/images/logo-02.svg';
import { CircleCheck, CircleX } from 'lucide-react';

export const TableCompare = () => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="text-center mb-6">
            <div className="mb-4">
              <h2 className="text-3xl font-bold">
                <span className="text-blue-600">One Platform</span>,<br />
                For All AI Model
                <br />
              </h2>
            </div>
            <p className="text-xl">
              What is the difference between ChatGPT Plus and OFA AI?
            </p>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>
                  {' '}
                  <Image
                    className="relative"
                    src={Logo02}
                    width={32}
                    height={32}
                    alt="Logo 01"
                  />
                </TableHead>
                <TableHead>
                  {' '}
                  <Image
                    className="relative"
                    src={Logo01}
                    width={32}
                    height={32}
                    alt="Logo 01"
                  />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold">Price per Month</TableCell>
                <TableCell>$20</TableCell>
                <TableCell>$5.99</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Chat Interface</TableCell>
                <TableCell>
                  <CircleCheck className="stroke-green-500" />
                </TableCell>
                <TableCell>
                  <CircleCheck className="stroke-green-500" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">
                  GPT 4o mini, GPT 4o, GPT 4, o1 mini
                </TableCell>
                <TableCell>
                  <CircleCheck className="stroke-green-500" />
                </TableCell>
                <TableCell>
                  <CircleCheck className="stroke-green-500" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Dall-E 3</TableCell>
                <TableCell>
                  <CircleCheck className="stroke-green-500" />
                </TableCell>
                <TableCell>
                  <CircleCheck className="stroke-green-500" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">DeepSeek R1</TableCell>
                <TableCell>
                  <CircleX className="stroke-red-500" />
                </TableCell>
                <TableCell>
                  <CircleCheck className="stroke-green-500" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">
                  Claude 3.5 Sonnet
                </TableCell>
                <TableCell>
                  <CircleX className="stroke-red-500" />
                </TableCell>
                <TableCell>
                  <CircleCheck className="stroke-green-500" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Gemini 1.5</TableCell>
                <TableCell>
                  <CircleX className="stroke-red-500" />
                </TableCell>
                <TableCell>
                  <CircleCheck className="stroke-green-500" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Perplexity</TableCell>
                <TableCell>
                  <CircleX className="stroke-red-500" />
                </TableCell>
                <TableCell>
                  <CircleCheck className="stroke-green-500" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">
                  Llama 3.1 by Meta & Groq
                </TableCell>
                <TableCell>
                  <CircleX className="stroke-red-500" />
                </TableCell>
                <TableCell>
                  <CircleCheck className="stroke-green-500" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Mistral AI</TableCell>
                <TableCell>
                  <CircleX className="stroke-red-500" />
                </TableCell>
                <TableCell>
                  <CircleCheck className="stroke-green-500" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Folders</TableCell>
                <TableCell>
                  <CircleX className="stroke-red-500" />
                </TableCell>
                <TableCell>
                  <CircleCheck className="stroke-green-500" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};
