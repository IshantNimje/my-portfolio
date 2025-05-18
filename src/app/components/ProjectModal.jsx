"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5"; // Close icon

export default function ProjectModal({ isOpen, onClose, project }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300" leave="ease-in duration-200"
          enterFrom="opacity-0" enterTo="opacity-100"
          leaveFrom="opacity-100" leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        {/* Modal content */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300" leave="ease-in duration-200"
            enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
            leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-lg w-full p-6">
              {/* ❌ Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
                aria-label="Close modal"
              >
                <IoClose size={24} />
              </button>

              {/* Modal Content */}
              <Dialog.Title className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {project.title}
              </Dialog.Title>

              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded mb-4"
              />

              <p className="text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
