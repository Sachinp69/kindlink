"use client";
import { Fragment } from "react";
import { Dialog,DialogPanel,DialogTitle, Transition } from "@headlessui/react";
import { Button } from "@/components/ui/button";

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  helperEmail: string;
  helperPhone?: string; // optional, add later
}

export default function HelpModal({
  isOpen,
  onClose,
  helperEmail,
  helperPhone,
}: HelpModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Background overlay */}
        <Transition
          as={Fragment}
          show={isOpen}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/50" />
        </Transition>

        {/* Modal box */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition
            show={isOpen}
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <DialogPanel className="w-full max-w-md rounded-2xl bg-slate-900 p-6 shadow-xl border border-amber-100/30">
              <DialogTitle className="text-lg font-medium text-amber-200">
                Contact Info
              </DialogTitle>

              <div className="mt-4 space-y-2 text-sm text-gray-200">
                <p>
                    <span className="font-medium">Email:</span>{" "}
                    {helperEmail ? (
                        <a
                        href={`mailto:${helperEmail}`}
                        className="text-green-400 hover:underline"
                        >
                        {helperEmail}
                        </a>
                    ) : (
                        <span className="text-red-400">No email provided</span>
                    )}
                </p>

                {helperPhone && (
                  <p>
                    <span className="font-medium">Phone:</span>{" "}
                    <a
                      href={`tel:${helperPhone}`}
                      className="text-green-400 hover:underline">
                      {helperPhone}
                    </a>
                  </p>
                )}
              </div>

              <div className="mt-6 flex justify-end">
                <Button
                  className="border border-green-500/40 bg-green-600/5 hover:bg-green-500"
                  onClick={onClose}>
                  Close
                </Button>
              </div>
            </DialogPanel>
          </Transition>
        </div>
      </Dialog>
    </Transition>
  );
}